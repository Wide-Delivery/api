import {Express} from "express";
import passport from "passport";
import authService from "../services/auth.service";
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
                            return done(err);
                        } else {
                            console.log(result);
                            return done(null, result.user, { scope: 'all' });
                        }
                    })

                }
            }
        ),
    )
}

export default initPassport;
