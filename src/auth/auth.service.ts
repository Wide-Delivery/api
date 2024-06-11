import authService from "../../services/auth.service";
import {UserDto} from "../dto/user.dto";
import logger from "../../logger";

export class AuthService {
    constructor() {
    }

    public static async login(email: string, password: string): Promise<UserDto> {
        return new Promise((resolve, reject) => {
            authService.signInUser({
                email, password
            }, (err: any, result: any) => {
                if (err) {
                    console.error(err);
                    reject(`Cannot login user with email ${email}`);
                } else {
                    console.log(result);
                    resolve(UserDto.parseFromGrpcResponse(result.user));
                }
            })
        });
    }

    public static async getMe(accessToken: string): Promise<UserDto> {
        return new Promise((resolve, reject) => {
            authService.getMe({
                access_token: accessToken
            }, (err: any, result: any) => {
                if (err) {
                    console.error(err);
                    reject(err.details);
                } else {
                    console.log(result);
                    resolve(UserDto.parseFromGrpcResponse(result.user));
                }
            })
        });
    }

    public static async getUserById(userId: string): Promise<UserDto> {
        return new Promise((resolve, reject) => {
            authService.getUserById({
                user_id: userId
            }, (err: any, result: any) => {
                if (err) {
                    console.error(err);
                    reject(err.details);
                } else {
                    console.log(result);
                    resolve(UserDto.parseFromGrpcResponse(result.user));
                }
            })
        });
    }

    public static async updateUserById(user: UserDto): Promise<UserDto> {
        const userToUpdateGrpcModel = {
            user_id: user.id,
            ...UserDto.getGrpcModel(user)
        }
        return new Promise((resolve, reject) => {
            authService.updateUser({
                ...userToUpdateGrpcModel
            }, (err: any, result: any) => {
                if (err) {
                    console.error(err);
                    reject(`Cannot update user with id ${user.id}`);
                } else {
                    console.log(result);
                    resolve(UserDto.parseFromGrpcResponse(result.user));
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
