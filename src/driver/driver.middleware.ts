import {NextFunction, Request, Response} from "express";
import {Driver} from "./driver";
import driverService from "../../services/driver.service";

export const driverAuth = async (req: Request, res: Response, next: NextFunction) => {
    const { id: userId } = req.user as { id: string };

    try {
        const getDriverByUserPromise = new Promise<void>((resolve, reject) => {
            driverService.getDriverByUserId({user_id: userId}, (err: any, result: any) => {
                if (err) {
                    reject(err);
                }

                const driverModel = Driver.parseFromGrpcResponse(result);
                if (driverModel) {
                    req.driver = driverModel;
                    resolve();
                } else reject("Driver not found");
            });
        });

        await getDriverByUserPromise;
        return next();
    } catch (error) {
        next(error);
    }
}
