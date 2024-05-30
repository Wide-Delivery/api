import {Express} from "express";
import passport from "passport";
import authService from "../services/auth.service";
import {UserDto} from "../src/dto/user.dto";
const BearerStrategy = require('passport-http-bearer').Strategy;

const initPassport = (app: Express) => {
    app.use(passport.initialize())

    passport.use(
        new BearerStrategy(
            function(token: string, done: any) {
                // User.findOne({ token: token }, function (err: any, user) {
                //     if (err) { return done(err); }
                //     if (!user) { return done(null, false); }
                //     return done(null, user, { scope: 'all' });
                // });
                console.log(token);
                if (token) {
                    authService.getMe({
                        access_token: token
                    }, (err: any, result: any) => {
                        if (err) {
                            console.log(err)
                            return done({
                                message: err.details,
                                httpCode: 401
                            });
                        } else {
                            console.log(result);
                            return done(null, UserDto.parseFromGrpcResponse(result.user), { scope: 'all' });
                        }
                    })

                }
            }
        ),
    )
}

export default initPassport;
