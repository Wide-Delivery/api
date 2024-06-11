import {OrderDto} from "../dto/order.dto";
import orderService from "../../services/order.service";
import type {
    Order__Output as _com_widedelivery_order_proto_Order__Output
} from "../../pb/com/widedelivery/order/proto/Order";

export class OrderService {
    constructor() {
    }

    public static getOrderById(orderId: string): Promise<OrderDto> {
        return new Promise((resolve, reject) => {
            orderService.getOrder({
                order_id: orderId
            }, (err: any, result: any) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log(result);
                    resolve(OrderDto.parseFromGrpcResponse(result.order));
                }
            })
        });
    }

    public static getOrdersWithFilters(filters?: any): Promise<OrderDto[]> {
        return new Promise((resolve, reject) => {
            orderService.getOrders({
                page_number: 1,
                page_size: 30,
            }, (err: any, result: any) => {
                if (err) {
                    console.error(err);
                    reject(`Cannot get orders with filters ${filters}`);
                } else {
                    console.log(result);
                    const orders = result.orders.map((order: _com_widedelivery_order_proto_Order__Output) => OrderDto.parseFromGrpcResponse(order));
                    resolve(orders);
                }
            })
        });
    }

    public static async linkDriverToOrder(orderId: string, driverId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            orderService.linkDriverWithOrder({
                driver_id: driverId,
                order_id: orderId,
            }, (err: any, result: any) => {
                if (err) {
                    if (err.details) {
                        reject(err.details);
                    }
                    console.error(err);
                    reject(`Cannot link driver ${driverId} to order ${orderId}`);
                } else {
                    console.log(result);
                    resolve(OrderDto.parseFromGrpcResponse(result.order));
                }
            })
        });
    }
    //
    // static async sendDriverWasLinkedToOrderEmail(order: OrderDto, driverUser: UserDto, user: UserDto) {
    //     const data = {
    //         username: user.name,
    //         drivername: driverUser.name,
    //         driverphone: driverUser.phoneNumber,
    //         order: order.departureTime?.toString()
    //     };
    //     const htmlContent = pug.renderFile('order/templates/driver-linked-to-order-notification.pug', data);
    //     const mailOptions = {
    //         receiver: user.email,
    //         subject: 'We have found a driver for your order!',
    //         html: htmlContent
    //     };
    //     try {
    //         let info = await NotificationService.sendEmail(mailOptions.receiver, mailOptions.subject, mailOptions.html);
    //         console.log('Message sent: %s', info.messageId);
    //         return info;
    //     } catch (error) {
    //         console.error('Failed to send email:', error);
    //         throw error;
    //     }
    // }
}
