require('dotenv').config();

const customConfig: {
    port: number;
    userServiceUrl: string;
    orderServiceUrl: string;
    driverServiceUrl: string;
    nodeEnv: string;
    notificationServiceEmail: string;
    notificationServicePassword: string;
} = {
    port: process.env.APP_PORT as unknown as number,
    userServiceUrl: process.env.USER_SERVICE_URL as string,
    orderServiceUrl: process.env.ORDER_SERVICE_URL as string,
    driverServiceUrl: process.env.DRIVER_SERVICE_URL as string,
    nodeEnv: process.env.NODE_ENV as string,
    notificationServiceEmail: process.env.NOTIFICATION_SERVICE_EMAIL as string,
    notificationServicePassword: process.env.NOTIFICATION_SERVICE_PASSWORD as string,
};

export default customConfig;

