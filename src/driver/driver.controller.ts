import { Response, NextFunction } from 'express';
import authService from '../../services/auth.service';
import { Driver } from './driver';
import logger from "../../logger";
import {DriverDto} from "../dto/driver.dto";
import driverService from "../../services/driver.service";
import * as grpc from "@grpc/grpc-js";
import {RegistrationErrorsMatcher} from "../../utils/grpc-http-error-matcher";
import httpReqLogger from "../../logger";
import {DriverTrip} from "./trip";
import {DriverService} from "./driver.service";
import {AuthService} from "../auth/auth.service";
import {UserDto} from "../dto/user.dto";

export const createDriver = async (req: any, res: Response, next: NextFunction) => {
    const { id: userId } = req.user as { id: string };

    try {
        const driverData = Driver.parseFromHttpBody(req.body);
        driverData.user_id = userId;

        const driver = await DriverService.createDriver(driverData);

        const driverModel = Driver.parseFromGrpcResponse(driver);

        const user = new UserDto({
            id: userId,
            role: "DRIVER",
        });

        await AuthService.updateUserById(user);

        res.status(201).json(DriverDto.getModel(driverModel));
    } catch (error) {
        next(error);
    }
};

export const getDriverByUserId = async (req: any, res: Response, next: NextFunction) => {
    const { id: userId } = req.user as { id: string };

    try {
        const request = new Promise((resolve, reject) => {
            driverService.getDriverByUserId({ user_id: userId }, (err: any, result: any) => {
                try {
                    if (err) {
                        logger.info('error', { req, res });
                        return next(err);
                    }

                    logger.info('success', { req, res });
                    const response = Driver.parseFromGrpcResponse(result);
                    resolve(DriverDto.getModel(response));
                } catch (err) {
                    reject(err);
                }
            })
        });

        const driver = await request;
        res.status(200).json(driver);
    } catch (error) {
        next(error);
    }
}

const getUpdatedDriverInstance = (currentDriverInfo: Driver, updatedFields: any) => {
    if (updatedFields.may_be_loader) {
        currentDriverInfo.mayBeLoader = updatedFields.may_be_loader;
    }
    if (updatedFields.search_radius) {
        currentDriverInfo.searchRadius = updatedFields.search_radius;
    }
    if (updatedFields.truck) {
        const truck = updatedFields.truck;
        if (truck.truck_brand) {
            currentDriverInfo.truck.truckBrand = truck.truck_brand;
        }
        if (truck.truck_model) {
            currentDriverInfo.truck.truckModel = truck.truck_model;
        }
        if (truck.truck_plate) {
            currentDriverInfo.truck.truckPlate = truck.truck_plate;
        }
        if (truck.truck_serial_number) {
            currentDriverInfo.truck.truckSerialNumber = truck.truck_serial_number;
        }
        if (truck.truck_color) {
            currentDriverInfo.truck.truckColor = truck.truck_color;
        }
        if (truck.free_space_length) {
            currentDriverInfo.truck.freeSpaceLength = truck.free_space_length;
        }
        if (truck.free_space_width) {
            currentDriverInfo.truck.freeSpaceWidth = truck.free_space_width;
        }
        if (truck.free_space_height) {
            currentDriverInfo.truck.freeSpaceHeight = truck.free_space_height;
        }
    }
    return currentDriverInfo;
}

// Update Driver Handler
export const updateDriver = async (req: any, res: Response, next: NextFunction) => {
    const currentDriverInfo = req.driver;
    const updatedFields = Driver.parseFromHttpBody(req.body);

    if (!currentDriverInfo) {
        return res.status(404).send('Driver not found');
    }
    const updatedDriver = getUpdatedDriverInstance(currentDriverInfo, updatedFields);

    const request = new Promise((resolve, reject) => {
        driverService.updateDriverInfo(Driver.getGrpcModel(updatedDriver), (err, result: any) => {
            try {
                if (err) {
                    if (err.code === grpc.status.INVALID_ARGUMENT) {
                        res.status(404).send('Driver not found');
                        return;
                    }
                    logger.info('error', { req, res });
                    return next(err);
                }

                logger.info('success', { req, res });
                const response = Driver.parseFromGrpcResponse(result);
                resolve(DriverDto.getModel(response));
            } catch (err) {
                reject(err);
            }
        })
    });

    try {
        const driver = await request;
        res.status(200).json(driver)
    } catch (error) {
        next(error);
    }
};

// Get Info About Driver Handler
export const getInfoAboutDriver = async (req: any, res: Response, next: NextFunction) => {
    if (!req.driver) {
        httpReqLogger.info('error', { req, res });
        return res.status(404).send('Driver not found');
    }
    const { id: driverId } = req.params;

    try {
        const request = new Promise((resolve, reject) => {
            driverService.getDriverById({ driver_id: driverId }, (err: any, result: any) => {
                try {
                    if (err) {
                        logger.info('error', { req, res });
                        if (err.code === grpc.status.INVALID_ARGUMENT) {
                            res.status(404).send('Driver not found');
                            return;
                        }
                        return next(err);
                    }

                    logger.info('success', { req, res });
                    const response = Driver.parseFromGrpcResponse(result);
                    resolve(DriverDto.getModel(response));
                } catch (err) {
                    reject(err);
                }
            })
        });

        const driver = await request;
        res.status(200).json(driver);
    } catch (error) {
        next(error);
    }
};

// Get All Driver Trips Handler
export const getAllDriverTrips = async (req: any, res: Response, next: NextFunction) => {
    if (!req.driver) {
        httpReqLogger.info('error', {req, res});
        return res.status(404).send('Driver not found');
    }
    const {driverId} = req.driver;

    const request = new Promise((resolve, reject) => {
        driverService.getDriverTrips({driver_id: driverId}, (err: any, result: any) => {
            if (err) {
                console.error(err);
                res.status(err.code ? RegistrationErrorsMatcher[err.code] : 500).json({
                    status: 'failed',
                    message: err.details
                });
                httpReqLogger.info('error', {req, res});
                return;
            } else {
                const trips = result.trips.map(DriverTrip.parseFromGrpcResponse)
                httpReqLogger.info('success', {req, res});
                resolve(trips);
            }
        })
    });
    try {
        const trips = await request;
        res.status(200).json(trips);
    } catch (error) {
        next(error);
    }
};

// Create Driver Trip Handler
export const createDriverTrip = async (req: any, res: Response, next: NextFunction) => {
    if (!req.driver) {
        httpReqLogger.info('error', {req, res});
        return res.status(404).send('Driver not found');
    }
    const {driverId} = req.driver;
    const reqBody = req.body;
    const trip = DriverTrip.parseFromHttpBody(req.body);
    trip.driverId = driverId;
    if (!trip.freeSpaceLength) {
        trip.freeSpaceLength = req.driver.truck.freeSpaceLength;
    }
    if (!trip.freeSpaceWidth) {
        trip.freeSpaceWidth = req.driver.truck.freeSpaceWidth;
    }
    if (!trip.freeSpaceHeight) {
        trip.freeSpaceHeight = req.driver.truck.freeSpaceHeight;
    }
    const createTripPromise = new Promise((resolve, reject) => {
        driverService.createDriverTrip(DriverTrip.getGrpcModel(trip), (err: any, result: any) => {
            if (err) {
                console.error(err);
                res.status(err.code ? RegistrationErrorsMatcher[err.code] : 500).json({
                    status: 'failed',
                    message: err.details
                });
                httpReqLogger.info('error', {req, res});
            } else {
                resolve(DriverTrip.parseFromGrpcResponse(result))
            }
        });
    });

    try {
        const trip = await createTripPromise;
        res.status(201).json(trip);
        httpReqLogger.info('success', {req, res});
    } catch (error) {
        next(error);
    }
};

// Get Driver Trip Info Handler
export const getDriverTripInfo = async (req: any, res: Response, next: NextFunction) => {
    if (!req.driver) {
        httpReqLogger.info('error', { req, res });
        return res.status(404).send('Driver not found');
    }
    const { tripId } = req.params;

    try {
        const request = new Promise((resolve, reject) => {
            driverService.getDriverTripById({driver_trip_id: tripId}, (err: any, result: any) => {
                try {
                    if (err) {
                        logger.info('error', {req, res});
                        if (err.code === grpc.status.INVALID_ARGUMENT) {
                            res.status(404).send('Trip not found');
                            return;
                        }
                        return next(err);
                    }

                    const response = DriverTrip.parseFromGrpcResponse(result);
                    resolve(response);
                } catch (err) {
                    reject(err);
                }
            })
        });

        const trip = await request;
        res.status(200).json(trip);
        logger.info('success', {req, res});
    } catch (err) {
        next(err);
    }
};

// Update Driver Trip Info Handler
export const updateDriverTripInfo = async (req: any, res: Response, next: NextFunction) => {
    // const { id: driverId, tripId } = req.params;
    // const tripUpdateData = req.body;
    //
    // try {
    //     authService.updateDriverTripInfo(driverId, tripId, tripUpdateData, (err: any, result: any) => {
    //         if (err) {
    //             return next(err);
    //         }
    //         const response = Driver.parseFromGrpcResponse(result.trip);
    //         res.status(200).json(response);
    //     });
    // } catch (error) {
    //     next(error);
    // }
};

// Remove Driver Trip Handler
export const removeDriverTrip = async (req: any, res: Response, next: NextFunction) => {
    // const { id: driverId, tripId } = req.params;
    //
    // try {
    //     authService.removeDriverTrip(driverId, tripId, (err: any, result: any) => {
    //         if (err) {
    //             return next(err);
    //         }
    //         res.status(204).send();
    //     });
    // } catch (error) {
    //     next(error);
    // }
};

