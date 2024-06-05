import pug from 'pug';
import {OrderDto} from "../dto/order.dto";
import {DriverDto} from "../dto/driver.dto";
import {UserDto} from "../dto/user.dto";
import {NotificationService} from "../notification-service";
import path from "node:path";

export class OrderEmailNotifications {

    constructor() {

    }

    static async sendDriverWasLinkedToOrderEmail(order: OrderDto, driverUser: UserDto, user: UserDto) {
        const data = {
            user_name: user.name,
            driver_name: driverUser.name,
            driver_phone: '+380951234566',
            order_date: '12 червня 2024, 15:25',
            truck_plate: 'AA3239AA',
        }
        const templatePath = path.join(__dirname, 'templates', 'driver-linked-to-order-notification.pug');
        const htmlContent = pug.renderFile(templatePath, data);
        console.log('[template path]', templatePath);

        const mailOptions = {
            receiver: user.email,
            subject: 'We have found a driver for your order!',
            html: htmlContent
        };

        try {
            let info = await NotificationService.sendEmail(mailOptions.receiver,
                mailOptions.subject, mailOptions.html);
            console.log('Message sent: %s', info.messageId);
            return info;
        } catch (error) {
            console.error('Failed to send email:', error);
            throw error;
        }
    }
}
