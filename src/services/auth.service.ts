// import path from "node:path";
// import {ProtoGrpcType} from "../../pb/services";
// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';
// import {AuthServiceClient} from "../../pb/auth/AuthService";
//
// var PROTO_PATH = path.join(__dirname, "../../../protos/services.proto");
// console.log('[PROTO PATH]: ', PROTO_PATH);
//
// let authServiceClient: AuthServiceClient;
//
// function onClientReady() {
//     getAuthenticatedUser();
// }
//
// function getAuthenticatedUser() {
//     authServiceClient.getMe(
//         {
//             access_token:
//                 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNGI3Mjc0ZC0xNjE2LTRhMGYtYjEyZS03ODEyMTlmMDkxNWIiLCJpYXQiOjE2NTg4NjIxMTMsImV4cCI6MTY1ODg2MzAxM30.KI00SRt4PfHuQ9CZwbnPE2Q-nIwQyb5tuZOrgUkbPC8ln3_EuuRN_AWfNKviNVLMuy02LxR_biG8JlmbnAEXpA',
//         },
//         (err: any, res: any) => {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//             console.log(res);
//         }
//     );
// }
//
//
// const startAuthService = async () => {
//     if (authServiceClient) {
//         throw new Error('User service is already started!');
//     }
//     const packageDefinition = protoLoader.loadSync(
//         PROTO_PATH,
//         {keepCase: true,
//             longs: String,
//             enums: String,
//             defaults: true,
//             oneofs: true
//         });
//
//     const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
//     authServiceClient = new proto.auth.AuthService('0.0.0.0:3023',
//         grpc.credentials.createInsecure());
//
//
//     const deadline = new Date();
//     deadline.setSeconds(deadline.getSeconds() + 5);
//     authServiceClient.waitForReady(deadline, (err: any) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         // onClientReady();
//         console.info('[User service is started!]');
//     });
// }
//
// const getAuthServiceClient = async (): Promise<AuthServiceClient> => {
//     try {
//         await startAuthService();
//         return authServiceClient;
//     } catch (err: any) {
//         console.error('[User service is not started. Please check logs to find out the reason.]')
//         throw err;
//     }
// }
//
// export { getAuthServiceClient as getAuthService};
