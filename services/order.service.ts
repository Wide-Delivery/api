import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import {ProtoGrpcType} from "../pb/order_service";
import customConfig from "../config/default";
import path from "node:path";

const PROTO_PATH = path.join(__dirname, "../protos/order_service.proto");

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
const orderServiceClient = new proto.order.OrderService(customConfig.orderServiceUrl,
    grpc.credentials.createInsecure());

const connectOrderService = async () => {
    try {
        const deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 15);

        const waitForConnect = () => new Promise<void>((resolve, reject) => {
            orderServiceClient.waitForReady(deadline, (err: any) => {
                if (err) {
                    reject(err);
                } else {
                    console.info('[Order service is started!]');
                    resolve();
                }
            });
        });

        await waitForConnect();
    } catch (err: any) {
        console.warn('Cannot connect to Order Service');
        console.error(err.message);
        process.exit(1);
    }
}

connectOrderService();

export default orderServiceClient;
