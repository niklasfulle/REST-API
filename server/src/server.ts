import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import { connect, disconnect } from './utils/database';
import logger from './utils/logger';
import { CORS_ORIGIN } from './constans';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true,

}));
app.use(helmet())

const server = app.listen(PORT, async () => {
  await connect();
  logger.info(`Server is running on port ${PORT}`);
});

const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {

    logger.info(`Received ${signal}. Shutting down gracefully...`);
    // close server
    server.close()

    // close database
    await disconnect();

    process.exit(0);
  });
}

signals.forEach((signal) => {
  gracefulShutdown(signal);
});