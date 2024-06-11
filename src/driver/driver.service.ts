import driverService from "../../services/driver.service";
import {MakeDriverFromUserInput__Output} from "../../pb/com/widedelivery/driver/proto/MakeDriverFromUserInput";
import * as grpc from "@grpc/grpc-js";

export class DriverService {
    constructor(props: any) {
    }

    public static async createDriver(driver: MakeDriverFromUserInput__Output): Promise<any> {
        return new Promise((resolve, reject) => {
            driverService.makeDriverFromUser(driver, (err: any, result: any) => {
                if (err) {
                    console.error(err);
                    if (err.code === grpc.status.ALREADY_EXISTS) {
                        reject(new Error('Driver already exists'));
                        return;
                    }
                    reject(`Cannot create driver for user with id ${driver.user_id}`);
                } else {
                    console.log(result);
                    resolve(result);
                }
            })
        });
    }

}
