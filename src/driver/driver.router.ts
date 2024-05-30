import express, {Express} from "express";
import passport from "passport";
import {
    createDriver,
    createDriverTrip,
    getAllDriverTrips, getDriverByUserId,
    getDriverTripInfo,
    getInfoAboutDriver, removeDriverTrip,
    updateDriver, updateDriverTripInfo
} from "./driver.controller";
import {RegistrationErrorsMatcher} from "../../utils/grpc-http-error-matcher";
import httpReqLogger from "../../logger";
import {driverAuth} from "./driver.middleware";

const driversRouter = express.Router();

driversRouter.post('/', createDriver);
driversRouter.get('/', getDriverByUserId);
driversRouter.put('/:id', driverAuth, updateDriver);
driversRouter.get('/:id', driverAuth, getInfoAboutDriver);
driversRouter.get('/trips/all', driverAuth, getAllDriverTrips);
driversRouter.post('/trips', driverAuth, createDriverTrip);
driversRouter.get('/trips/:tripId', driverAuth, getDriverTripInfo);
driversRouter.put('/trips/:tripId', driverAuth, updateDriverTripInfo);
driversRouter.delete('/trips/:tripId', driverAuth, removeDriverTrip);

const driverServiceErrorHandler = (err: any, req: any, res: any, next: any) => {
    console.error('[DRIVER SERVICE]', err);
    if (err.code) {
        if (err.code === 14) {
            res.status(500).send('Driver service is unavailable');
            httpReqLogger.error('Driver service is unavailable', {req, res});
            return;
        }
        if (err.code === 2) {
            res.status(500).send('Driver service error. Check it\'s logs');
            httpReqLogger.error('Driver service internal error', {req, res});
            return;
        }
        if (!Object.keys(RegistrationErrorsMatcher).map(k => +k).includes(err.code)) {
            const keys = Object.keys(RegistrationErrorsMatcher);
            console.log(keys);
            res.status(500).json({
                status: 'failed',
                message: err.message,
                details: 'Error handler doesn\'t have this error code from Driver svc'
            });
            httpReqLogger.warn('Driver service unhandled error', {req, res});
            return;
        }
        res.status(err.code ? RegistrationErrorsMatcher[err.code] : 500).json({status: 'failed', message: err.message});
        httpReqLogger.info('Driver service handled error', {req, res});
        return;
    }

    res.status(500).json({status: 'failed', message: err.message});
    httpReqLogger.warn('Driver service error', {req, res});
}

export const DriverRouter = (app: Express) => {
    driversRouter.use(driverServiceErrorHandler);
    app.use('/drivers', passport.authenticate('bearer', {session: false}), driversRouter);
}
