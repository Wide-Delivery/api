import { Request, Response, NextFunction } from 'express';
import authService from "../../services/auth.service";
import {AUTH_PROVIDERS} from "../../constants/auth-constants";
import {RegistrationErrorsMatcher} from "../../utils/grpc-http-error-matcher";


export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    const {name, email, password, phoneNumber} = req.body;
    // todo validate if all exists (mb with middleware)
    authService.signUpUser({
        name: name,
        email: email,
        password: password,
        provider: AUTH_PROVIDERS.LOCAL,
    }, (err: any, result: any) => {
        if (err) {
            console.error(err); // todo logging
            res.status(err.code ? RegistrationErrorsMatcher[err.code] : 500).json({ status: 'failed', message: err.details });
        } else {
            console.log(result); // todo logging
            res.status(201).json(result);
        }
    })
}

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    // todo validate if all exists (mb with middleware)
    authService.signInUser({
        email: email,
        password: password,
    }, (err: any, result: any) => {
        if (err) {
            console.error(err);
            res.status(err.code ? RegistrationErrorsMatcher[err.code] : 500).json({ status: 'failed', message: err.details})
        } else {
            console.log(result);
            res.status(200).json(result);
        }
    })
}

export const loginOrRegisterOAuth = async (req: Request, res: Response, next: NextFunction) => {
    const { oauth_token: oauthToken } = req.body;
    authService.oAuthSignIn({
        oauth_token: oauthToken,
        provider: 'google'
    }, (err: any, result: any) => {
        if (err) {
            console.error(err);
            res.status(err.code ? RegistrationErrorsMatcher[err.code] : 500).json({ status: 'failed', message: err.details})
        }
        console.log(result);
        res.status(200).json(result);
    });

}


export const getMe = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    console.log('[user]', user);
    res.status(200).json(user);
}

export const refreshJwtTokens = async (req: Request, res: Response, next: NextFunction) => {
    const { refresh_token } = req.body;
    authService.refreshToken({
        refresh_token: refresh_token,
    }, (err: any, result: any) => {
        if (err) {
            console.error(err);
            res.status(500).json({ code: err.code, message: err.message})
        }
        console.log(result);
        res.status(200).json(result);
    })
}
