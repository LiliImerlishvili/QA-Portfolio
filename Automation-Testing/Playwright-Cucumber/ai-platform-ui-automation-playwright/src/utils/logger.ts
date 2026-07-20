import * as winston from 'winston';
import { config } from '../config/config';

const { combine, timestamp, colorize, printf, json } = winston.format;

const consoleFormat = printf(({ level, message, timestamp: ts, ...meta }) => {
  const metaStr = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
  return `[${ts}] ${level}: ${message}${metaStr}`;
});

export const logger = winston.createLogger({
  level: config.logging.level,
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: 'HH:mm:ss' }),
        consoleFormat,
      ),
    }),
    new winston.transports.File({
      filename: 'reports/test.log',
      format: combine(timestamp(), json()),
    }),
  ],
});
