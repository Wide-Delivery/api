import { Request, Response, NextFunction } from 'express';
import orderService from "../../services/order.service";
import {RegistrationErrorsMatcher} from "../../utils/grpc-http-error-matcher";
import {UserDto} from "../dto/user.dto";
import {OrderDto} from "../dto/order.dto";

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
    const user = req.user;
    // todo validate if all exists (mb with middleware)

    orderService.createOrder({
        user: new UserDto(user),
        cargo_type: cargo_type,
        cargo_length: cargo_length,
        cargo_width: cargo_width,
        cargo_height: cargo_height,
        departure_longitude: departure_longitude,
        departure_latitude: departure_latitude,
        departure_time: {
            seconds: Date.now(),
        },
        destination_longitude: destination_longitude,
        destination_latitude: destination_latitude,
        destination_time: {
            seconds: Date.now(),
        },
        description: description,
        need_loader: need_loader
    }, (err: any, result: any) => {
        if (err) {
            console.error(err); // todo logging
            res.status(err.code ? RegistrationErrorsMatcher[err.code] : 500).json({ status: 'failed', message: err.message });
        } else {
            console.log(result); // todo logging
            res.status(201).json(OrderDto.parseFromGrpcResponse(result.order));
        }
    })
}

export const getOrder = async (req: Request, res: Response, next: NextFunction) => {
    const { orderId } = req.params;
    // todo validate if all exists (mb with middleware)
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
}
