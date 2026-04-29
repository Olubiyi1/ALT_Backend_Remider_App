import config from "./config.js";
import mongoose from "mongoose";
import startBirthdayManager from "../cron_notification/notification.js";

const connectDb = async () => {
  try {
    console.log("db connection started");
    const conn = await mongoose.connect(config.mongo_uri);
    console.log("connection to db successful");

    startBirthdayManager()

    // event listeners
    mongoose.connection.on("error", (err) => {
      console.log("mongo db connection error");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("mongo db disconnectred");
    });
  } catch (err) {
    console.log("error connecting db", err);
    process.exit(1);
  }
};
export default connectDb