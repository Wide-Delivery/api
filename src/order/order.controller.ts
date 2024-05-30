import { Request, Response, NextFunction } from 'express';
import orderService from "../../services/order.service";
import {UserDto} from "../dto/user.dto";
import {OrderDto} from "../dto/order.dto";
import httpReqLogger from "../../logger";

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    const {
        cargo_type,
        cargo_length,
        cargo_width,
        cargo_height,
        departure_longitude,
        departure_latitude,
        departure_time,
        destination_longitude,
        destination_latitude,
        destination_time,
        order_creation_time,
        description,
        need_loader
    } = req.body;
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
        orderService.getOrder({
            order_id: orderId
        }, (err: any, result: any) => {
            if (err) {
                console.error(err);
                res.status(500).json({ code: err.code, message: err.message})
            } else {
                console.log(result);
                res.status(200).json(OrderDto.parseFromGrpcResponse(result.order));
            }
        })
    } catch (e)
    {
        next(e)
    }
}
