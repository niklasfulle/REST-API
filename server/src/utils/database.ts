import mongoose from "mongoose";
import logger from "./logger";

const DB_URL = process.env.DB_URL || "mongodb://192.168.178.14:27017/rest-api";

export async function connect() {
  try {
    await mongoose.connect(DB_URL);
    logger.info("Database connected");
  } catch (error) {
    logger.error("Database connection failed", error);
    process.exit(1);
  }
}

export async function disconnect() {
  await mongoose.connection.close();

  logger.info("Database disconnected");

  return
}