import { Request, Response, NextFunction } from 'express';
import {AuthServiceClient} from "../../pb/auth/AuthService";

export const registerUser = (req: Request, res: Response, next: NextFunction, authService: AuthServiceClient) => {
    const {name, email, password, phoneNumber, provider} = req.body;
    authService.signUpUser({
        name: 'name',
        email: 'email',
        password: 'password',
        provider: 'provider',
    }, (err: any, result: any) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(result);
        res.status(200).json(res);
    })
}
