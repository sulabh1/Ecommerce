(() => {
  require("dotenv").config();
  const mongoose = require("mongoose");

  const app = require("./app");
  const { logger } = require("./utils");

  const port = process.env.PORT || 3000;

  return () => {
    const db = process.env.MONGO_URL.replace(
      "<password>",
      process.env.MONGO_PASSWORD
    );

    app.listen(port, () => {
      mongoose
        .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((data) => {
          logger.info({
            message: `Successfuly connected to the db`,
          });
        })
        .catch((err) => {
          logger.error(err.message);
        });
      logger.info({
        message: `Listening to the port ${port}`,
      });
    });
  };
})()();
