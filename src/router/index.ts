import {AuthRouter} from "../auth/auth.router";
import {OrderRouter} from "../order/order.router";
import {Express} from "express";

export const initRouter = (app: Express) => {
    AuthRouter(app);
    OrderRouter(app);
}
