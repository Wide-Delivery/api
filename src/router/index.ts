import {AuthRouter} from "../auth/auth.router";
import {Express} from "express";

export const initRouter = (app: Express) => {
    AuthRouter(app);
}
