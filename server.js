import config from "./src/config/config.js";
import app from "./app.js";
import connectDb from "./src/config/db.js";
import mongoose from "mongoose";

let server;

const startServer = async () => {
  try {
    await connectDb();
    console.log("db connected");
    server = app.listen(config.port, () => {
      console.log(`app up and running on port ${config.port}`);
    });
  } catch (err) {
    console.log("failed to start server", err);
    process.exit(1);  
  }
};

const shutdown = (signal) => {
  console.log(`${signal} signal received`);
  server.close(async () => {
    console.log("shutting down started");
    await mongoose.connection.close();  
    console.log("shutdown complete");
    process.exit(0);
  });
};

// handle both manual (Ctrl+C) and platform shutdowns
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

startServer();
