import dotenv, { config } from "dotenv";
import { mongo } from "mongoose";
dotenv.config();

export default {
  mongo_uri: process.env.mongo_Uri,
  port: process.env.port,
  user: process.env.EMAIL_USER, 
  pass: process.env.EMAIL_PASS,
};
