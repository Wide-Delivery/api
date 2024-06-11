import nodemailer from "nodemailer";
import customConfig from '../../config/default';

export class NotificationService {
    private static readonly transporter: nodemailer.Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: customConfig.notificationServiceEmail,
            pass: customConfig.notificationServicePassword,
        }
    });

    constructor() {

    }

    static async sendEmail(receiver: string, subject: string, htmlContent: string) {
        const mailOptions = {
            from: customConfig.notificationServiceEmail,
            to: receiver,
            subject: subject,
            html: htmlContent
        };

        try {
            let info = await this.transporter.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
            return info;
        } catch (error) {
            console.error('Failed to send email:', error);
            throw error;
        }
    }
}
