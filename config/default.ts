require('dotenv').config();

const customConfig: {
    port: number;
    userServiceUrl: string;
    orderServiceUrl: string;
    driverServiceUrl: string;
    nodeEnv: string;
} = {
    port: process.env.APP_PORT as unknown as number,
    userServiceUrl: process.env.USER_SERVICE_URL as string,
    orderServiceUrl: process.env.ORDER_SERVICE_URL as string,
    driverServiceUrl: process.env.DRIVER_SERVICE_URL as string,
    nodeEnv: process.env.NODE_ENV as string,
};

export default customConfig;

