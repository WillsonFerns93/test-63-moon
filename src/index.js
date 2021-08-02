const express = require('express');
const logger = console;

const app = express();

const port = process.env.PORT || 5000;

const { RestRouter } = require('./routes');
const router = express.Router();

const routes = new RestRouter(router, logger);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const requestAttachment = async (req, res, next) => {
  req.logger = logger;
  req.startTime = new Date();

  next();
};

app.use(requestAttachment);

app.use('/api', routes.start());

app.listen(port, () => {
  logger.info(`server running on ${port}`);
});

exports = app;
