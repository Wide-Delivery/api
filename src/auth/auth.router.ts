import express, {Express} from "express";
import {registerUser} from "./auth.controller";
import {AuthServiceClient} from "../../pb/auth/AuthService";
const authRouter = express.Router();

let AuthService: AuthServiceClient;

authRouter.post('/register', (req, res, next) => registerUser(req, res, next, AuthService));

export const AuthRouter = (app: Express, authService: AuthServiceClient) => {
    if (!AuthService) {
        AuthService = authService;
    }
    app.use('/auth', authRouter);
}
