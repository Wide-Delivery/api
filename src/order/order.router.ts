import express, {Express, Response, Request, NextFunction} from "express";
import passport from "passport";
import {createOrder, getOrder, linkDriverToOrder} from "./order.controller";
import {RegistrationErrorsMatcher} from "../../utils/grpc-http-error-matcher";
import httpReqLogger from "../../logger";
import {driverAuth} from "../driver/driver.middleware";

const ordersRouter = express.Router();

ordersRouter.post('/', createOrder);
ordersRouter.get('/:orderId', getOrder);
ordersRouter.put('/:orderId/accept', driverAuth, linkDriverToOrder);

const orderServiceErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('[ORDER SERVICE]', err);
    if (err.code) {
        if (err.code === 14) {
            res.status(500).send('Order service is unavailable');
            httpReqLogger.error('order service is unavailable', {req, res});
            return;
        }
        if (err.code === 2) {
            res.status(500).send('Order service error. Check it\'s logs');
            httpReqLogger.error('order service internal error', {req, res});
            return;
        }
        if (err.code === 3) {
            res.status(500).json({status: "failed", message: err.details});
            httpReqLogger.error('order service internal error', {req, res});
            return;
        }
        if (!Object.keys(RegistrationErrorsMatcher).map(k => +k).includes(err.code)) {
            const keys = Object.keys(RegistrationErrorsMatcher);
            console.log(keys);
            res.status(500).json({
                status: 'failed',
                message: err.message,
                details: 'Error handler doesn\'t have this error code from order svc'
            });
            httpReqLogger.warn('order service unhandled error', {req, res});
            return;
        }
        res.status(err.code ? RegistrationErrorsMatcher[err.code] : 500).json({status: 'failed', message: err.message});
        httpReqLogger.info('order service handled error', {req, res});
        return;
    }

    res.status(500).json({status: 'failed', message: err});
    httpReqLogger.warn('order service error', {req, res});
}

export const OrderRouter = (app: Express) => {
    ordersRouter.use(orderServiceErrorHandler);
    app.use('/orders', passport.authenticate('bearer', {session: false}), ordersRouter);
    // app.use(orderServiceErrorHandler);
}
