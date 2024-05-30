import winston, {Logger} from "winston";
import ecsFormat from "@elastic/ecs-winston-format";
import customConfig from "../config/default";

const logFilesPath = customConfig.nodeEnv === 'docker' ? '/var/log/app/http-requests.log' : 'logs/http-requests.log';

const httpReqLogger: Logger = winston.createLogger({
    level: 'debug',
    format: ecsFormat({ convertReqRes: true }),
    transports: [
        new winston.transports.File({
            filename: logFilesPath,
            // filename: '/var/log/app/http-requests.json',
            level: 'debug'
        })
    ]
});

export default httpReqLogger;
