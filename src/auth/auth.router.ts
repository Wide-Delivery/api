import express, {Express} from "express";
import {
    getMe,
    loginOrRegisterOAuth,
    loginUser,
    registerUser,
    refreshJwtTokens,
    updateUserHandler
} from "./auth.controller";
import passport from "passport";
const authRouter = express.Router();

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
authRouter.put('/update',
    passport.authenticate('bearer', {session: false}),
    updateUserHandler)

export const AuthRouter = (app: Express) => {
    app.use('/auth', authRouter);
}
