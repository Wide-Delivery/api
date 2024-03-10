require('dotenv').config();

const customConfig: {
    port: number;
    userServiceUrl: string
} = {
    port: process.env.APP_PORT as unknown as number,
    userServiceUrl: process.env.USER_SERVICE_URL as string,
};

export default customConfig;

