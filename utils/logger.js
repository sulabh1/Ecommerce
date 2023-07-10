(() => {
  const { createLogger, format, transports } = require("winston");
  const chalk = require("chalk");

  const { combine, timestamp, label, printf, prettyPrint, colorize, json } =
    format;

  return (() => {
    //     const logger = winston.createLogger({
    //       level: "info",
    //       format: winston.format.json(),
    //       transports: [new winston.transports.Console({ timestamp: true })],
    //       timestamp: true,
    //     });

    const myFormat = printf(({ level, message, timestamp }) => {
      switch (level) {
        case "info":
          return `${timestamp}  ${level}: ${message}`;
        case "warn":
          return `${timestamp}  ${level}: ${message}`;
        case "error":
          return `${timestamp}  ${level}: ${message}`;
        default:
          return message;
      }
    });
    const logger = createLogger({
      format: combine(timestamp(), myFormat, json()),
      transports: [new transports.Console()],
    });

    module.exports = logger;
  })();
})();
