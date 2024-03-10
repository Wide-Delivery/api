import {OAuth2Client} from "google-auth-library";

const OAuthClient = new OAuth2Client();

// const connectOAuthClient = async () => {
//     try {
//         OAuthClient = new OAuth2Client();
//         console.log('🚀 OAuth client connected');
//     } catch (err: any) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };
//
// connectOAuthClient();

export default OAuthClient;
