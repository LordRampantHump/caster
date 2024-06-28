import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, colorize } = format;
import 'dotenv/config';

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    logFormat,
    colorize()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: process.env.LOGS + '/combined.log', options: { flags: 'w' }}),
    new transports.File({ filename: process.env.LOGS + '/errors.log', level: 'error', options: { flags: 'w' } })
  ],
  exceptionHandlers: [
    new transports.File({ filename: process.env.LOGS + '/exceptions.log', options: { flags: 'w' } })
  ],
  rejectionHandlers: [
    new transports.File({ filename: process.env.LOGS + '/rejections.log', options: { flags: 'w' } })
  ]
});

export default logger;
