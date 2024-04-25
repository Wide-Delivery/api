import express, {Express} from "express";
import passport from "passport";
import {createOrder, getOrder} from "./order.controller";
const ordersRouter = express.Router();

ordersRouter.post('/', createOrder);
ordersRouter.get('/:orderId', getOrder);

export const OrderRouter = (app: Express) => {
    app.use('/orders', passport.authenticate('bearer', { session: false }), ordersRouter);
}
