import {Driver} from "../driver/driver";
import {UserDto} from "../dto/user.dto";

// declare module 'express-serve-static-core' {
//     interface Request {
//         driver?: Driver;
//     }
// }


declare namespace Express {
    export interface Request {
        driver?: Driver,
        user?: UserDto
    }
}

// export interface RequestWithDriver extends Request {
//     driver: Driver
//     user: UserDto
// }
