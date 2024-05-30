import {Driver} from "../driver/driver";

declare module 'express-serve-static-core' {
    interface Request {
        driver?: Driver;
    }
}
