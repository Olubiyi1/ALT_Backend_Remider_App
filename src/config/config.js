import dotenv from "dotenv";

dotenv.config();

export default {
  mongo_uri: process.env.MONGO_URI,
  port: process.env.PORT,
  user: process.env.EMAIL_USER, 
  pass: process.env.EMAIL_PASS,
};
