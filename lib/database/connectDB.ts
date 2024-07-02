import mongoose from "mongoose";

let cachedConnection = (global as any).mongoose || {
  conn: null,
  promise: null,
};
const MONGODB_URL = process.env.MONGODB_URL;

export const connectToDatabase = async () => {
  if (cachedConnection.conn) {
    return cachedConnection.conn;
  }
  if (!MONGODB_URL) {
    throw new Error("ADMIN must provided a mongodb connection");
  }

  cachedConnection.promise =
    cachedConnection.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "ai-content-generator",
      bufferCommands: false,
    });

  cachedConnection.conn = await cachedConnection.promise;

  return cachedConnection.conn;
};
