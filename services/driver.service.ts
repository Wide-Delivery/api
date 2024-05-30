import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import {ProtoGrpcType} from "../pb/driver_service";
import customConfig from "../config/default";
import path from "node:path";

const PROTO_PATH = path.join(__dirname, "../protos/driver_service.proto");

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
const driverServiceClient = new proto.driver.DriverService(customConfig.driverServiceUrl,
    grpc.credentials.createInsecure());

const connectDriverService = async () => {
    try {
        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 15);

        const waitForConnect = () => new Promise<void>((resolve, reject) => {
            driverServiceClient.waitForReady(deadline, (err: any) => {
                if (err) {
                    reject(err);
                }
                console.info('[Driver service is started!]');
                resolve();
            });
        });

        await waitForConnect();
    } catch (err: any) {
        console.warn('Cannot connect to Driver Service at port', customConfig.driverServiceUrl);
        console.error(err.message);
        process.exit(1);
    }
}

connectDriverService();

export default driverServiceClient;
