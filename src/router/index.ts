import {AuthRouter} from "../auth/auth.router";
import {Express} from "express";
import {AppServices} from "../../types/app-services";

export const initRouter = (app: Express, services: AppServices) => {
    AuthRouter(app, services.authService);
}
