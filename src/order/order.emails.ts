import pug from 'pug';
import {OrderDto} from "../dto/order.dto";
import {UserDto} from "../dto/user.dto";
import {NotificationService} from "../notification-service";
import path from "node:path";
import {Truck} from "../driver/truck";

const monthsUa = [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня'
];

export class OrderEmailNotifications {

    constructor() {

    }

    static async sendDriverWasLinkedToOrderEmail(order: OrderDto, driverUser: UserDto, user: UserDto, truck: Truck) {
        const departureTime = order.departureTime || new Date();
        const departureTimeHoursMinutes = "" + ((departureTime.getHours() < 10) ? '0' + departureTime.getHours() : departureTime.getHours())
            + ":" + ((departureTime.getMinutes() < 10) ? '0' + departureTime.getMinutes() : departureTime.getMinutes());
        const data = {
            user_name: user.name,
            driver_name: driverUser.name,
            driver_phone: driverUser.phoneNumber || '+380951234599',
            order_date: departureTime.getDate() + " " + monthsUa[departureTime?.getMonth()]
                + " " + departureTime.getFullYear() + " " + departureTimeHoursMinutes,
            truck_plate: truck.truckPlate,
            truck_brand: truck.truckBrand,
            truck_model: truck.truckModel,
            truck_color: truck.truckColor,
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
