import express, {Express} from "express";
import {getMe, loginOrRegisterOAuth, loginUser, registerUser} from "./auth.controller";
import {AuthServiceClient} from "../../pb/auth/AuthService";
import passport from "passport";
const authRouter = express.Router();

let AuthService: AuthServiceClient;

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);
authRouter.post('/me', passport.authenticate('bearer', { session: false }), getMe);
authRouter.post('/oauth', loginOrRegisterOAuth);

export const AuthRouter = (app: Express) => {
    app.use('/auth', authRouter);
}
