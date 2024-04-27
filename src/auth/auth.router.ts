import express, {Express} from "express";
import {getMe, loginOrRegisterOAuth, loginUser, registerUser, refreshJwtTokens} from "./auth.controller";
import passport from "passport";
const authRouter = express.Router();

// import { validate } from 'express-validation';
import {validation} from './auth.validation';

authRouter.post('/register',
    // validate(validation.post.register),
    registerUser);
authRouter.post('/login',
    // validate(validation.post.login),
    loginUser);
authRouter.get('/me',
    // validate(validation.get.me),
    passport.authenticate('bearer', { session: false }), getMe);
authRouter.post('/refresh',
    // validate(validation.post.refresh),
    refreshJwtTokens);
authRouter.post('/oauth',
    // validate(validation.post.oauth),
    loginOrRegisterOAuth);

export const AuthRouter = (app: Express) => {
    app.use('/auth', authRouter);
}
