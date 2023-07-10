import mongoose from "mongoose";
import logger from "./logger";
import * as dotenv from "dotenv";
var path = __dirname.replace("utils", "");
dotenv.config({ path: path + '.env' });

const DB_URL = process.env.DB_URL as string;


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