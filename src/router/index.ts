import {AuthRouter} from "../auth/auth.router";
import {OrderRouter} from "../order/order.router";
import {DriverRouter} from "../driver/driver.router";
import {Express} from "express";

export const initRouter = (app: Express) => {
    AuthRouter(app);
    DriverRouter(app);
    OrderRouter(app);
}
