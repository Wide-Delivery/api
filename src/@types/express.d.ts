import {Driver} from "../driver/driver";
import {UserDto} from "../dto/user.dto";

declare global {
    namespace Express {
        interface Request {
            driver?: Driver,
            user?: UserDto
        }
    }
}
