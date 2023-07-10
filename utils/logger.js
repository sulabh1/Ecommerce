/* eslint-disable global-require */
(() => {
  const { createLogger, format, transports } = require('winston');

  const {
    combine, timestamp, printf, prettyPrint, json,
  } = format;

  return (() => {
    //     const logger = winston.createLogger({
    //       level: "info",
    //       format: winston.format.json(),
    //       transports: [new winston.transports.Console({ timestamp: true })],
    //       timestamp: true,
    //     });

    // eslint-disable-next-line no-shadow
    const myFormat = printf(({ level, message, timestamp }) => {
      switch (level) {
        case 'info':
          return `${timestamp}  ${level}: ${message}`;
        case 'warn':
          return `${timestamp}  ${level}: ${message}`;
        case 'error':
          return `${timestamp}  ${level}: ${message}`;
        default:
          return message;
      }
    });
    const logger = createLogger({
      format: combine(timestamp(), myFormat, json(), prettyPrint()),
      transports: [new transports.Console()],
    });

    module.exports = logger;
  })();
})();
