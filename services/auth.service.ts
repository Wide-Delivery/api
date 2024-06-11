import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import {ProtoGrpcType} from "../pb/auth_service";
import customConfig from "../config/default";
import path from "node:path";

const PROTO_PATH = path.join(__dirname, "../protos/auth_service.proto");

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
const authServiceClient = new proto.com.widedelivery.auth.service.AuthService(customConfig.userServiceUrl,
    grpc.credentials.createInsecure());

const connectAuthService = async () => {
    try {
        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 15);

        const waitForConnect = () => new Promise<void>((resolve, reject) => {
            authServiceClient.waitForReady(deadline, (err: any) => {
                if (err) {
                    reject(err);
                }
                console.info('[User service is started!]');
                resolve();
            });
        });

        await waitForConnect();
    } catch (err: any) {
        console.warn('Cannot connect to Auth Service at port', customConfig.userServiceUrl);
        console.error(err.message);
        process.exit(1);
    }
}

connectAuthService();

export default authServiceClient;
