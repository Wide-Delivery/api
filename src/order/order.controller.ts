import { Request, Response, NextFunction } from 'express';
import orderService from "../../services/order.service";
import {UserDto} from "../dto/user.dto";
import {OrderDto} from "../dto/order.dto";
import httpReqLogger from "../../logger";
import {OrderEmailNotifications} from "./order.emails";
import {OrderService} from "./order.service";
import {AuthService} from "../auth/auth.service";
import {Driver} from "../driver/driver";

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as UserDto;
    if (!user) {
        res.status(401).json({ message: "Unauthorized" });
        return;
    }
    // todo validate if all exists (mb with middleware)

    try {
        const createOrderPromise = new Promise((resolve, reject) => {
            orderService.createOrder({
                ...OrderDto.getGrpcModel(OrderDto.parseFromHttpBody({...req.body, userId: user.id})),
                user: UserDto.getGrpcModel(user),
            }, (err: any, result: any) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(result)
                    const response = OrderDto.parseFromGrpcResponse(result.order);
                    resolve(response);
                }
            })
        });

        const order = await createOrderPromise;
        res.status(201).json(order);
        httpReqLogger.info("success", { req, res });
    } catch (e) {
        next(e)
    }

}

export const getOrder = async (req: Request, res: Response, next: NextFunction) => {
    const { orderId } = req.params;
    // todo validate if all exists (mb with middleware)
    try {
        const order = await OrderService.getOrderById(orderId);
        res.status(200).json(order);
    }
    catch (e) {
        next(e)
    }
}


// export const linkDriverToOrder = async (req: Request, res: Response, next: NextFunction) => {
//     const driver = new UserDto({
//         email: 'ginger0330190+driver@gmail.com',
//         name: 'Олексій',
//         phoneNumber: '+380123456789',
//     });
//     const user = new UserDto({
//         email: 'ginger0330190+user@gmail.com',
//         name: 'Станіслав',
//         phoneNumber: '+380123456789',
//     });
//     const order = await OrderService.getOrderById('6658cc534740761554fad9ed');
//     await OrderEmailNotifications.sendDriverWasLinkedToOrderEmail(order, driver, user);
//     res.status(200).send();
// }


export const linkDriverToOrder = async (req: any, res: Response, next: NextFunction) => {
    const driver = req.driver as Driver;
    const user = req.user;
    const { orderId } = req.params;

    try {
        const order: OrderDto = await OrderService.linkDriverToOrder(orderId, driver.driverId);
        const customer = await AuthService.getUserById(order.userId);
        res.status(201).json(order);
        await OrderEmailNotifications.sendDriverWasLinkedToOrderEmail(order, user, customer, driver.truck);
    } catch (error) {
        next(error);
    }
}
