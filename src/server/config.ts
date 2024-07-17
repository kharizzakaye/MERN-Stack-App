const env = process.env;

export const PORT = env.PORT ?? "8080";
export const HOST = env.HOST ?? "localhost"; // "0.0.0.0"
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI = env.MONGODB_URI ?? "mongodb://localhost:27017"; // copied from MongoDB
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
    PORT, 
    HOST,
    SERVER_URL,
}

// export default () => ({
//     PORT, HOST
// })