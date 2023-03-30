// https://dev.to/jobizil/getting-started-with-winston-logger-a-beginner-s-guide-7j3

import winston from 'winston';
// @ts-ignore
import winstonGelf from 'winston-gelf';
import process from 'process';

const GRAYLOG_HOST = process.env.GRAYLOG_HOST;
const GRAYLOG_PORT = process.env.GRAYLOG_PORT;
const NODE_ENV = process.env.NODE_ENV || 'development'

let myCustomFormat = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.label({ label: '[LOGGER]' }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:MM:SS' }),
    winston.format.printf(
        (info: any) => {
          return `${info.label} ${info.timestamp} ${info.level}: ${info.message}`
        }
    )
);

winston.addColors({
  info: 'bold blue', // fontStyle color
  warn: 'italic yellow',
  error: 'bold red',
  debug: 'green',
});


var transportsArr = [
  new winston.transports.Console({ format: winston.format.combine(myCustomFormat) })
];

if (GRAYLOG_HOST && GRAYLOG_PORT) {
  const gelfTransport = new winstonGelf({
    // You will find all gelfPro options here: https://www.npmjs.com/package/gelf-pro
    gelfPro: {
      fields: {
        env: NODE_ENV
      },
      adapterName: 'udp',
      adapterOptions: {
        host: GRAYLOG_HOST,
        port: GRAYLOG_PORT,
      }
    }
  })
  transportsArr.push(gelfTransport);

  console.debug(`GRAYLOG_HOST=${GRAYLOG_HOST}, GRAYLOG_PORT=${GRAYLOG_PORT}. GELF is ENABLED`);
} else {
  console.debug(`GRAYLOG_HOST=${GRAYLOG_HOST}, GRAYLOG_PORT=${GRAYLOG_PORT}. GELF is DISABLED`);
}

var logsLevel = 'info'
if (NODE_ENV === 'development'|| NODE_ENV === 'local') {
  logsLevel = 'debug'
}

const logger = winston.createLogger({
  level: logsLevel,
  transports: transportsArr,
});

export default logger;