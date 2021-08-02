const { response } = require('express');
const fsPromise = require('fs/promises');

module.exports = function callback({ controller }) {
  return async (req, res) => {
    const request = req;

    try {
      const response = await controller(request);
      await logData({
        req,
        res: response,
        logger: req.logger,
      });
      // res.setHeader(headers['Content-Type'] = 'application/json');
      res.type('json');
      await res.status(response.statusCode || 200).send(response.body);
    } catch (e) {
      req.logger.error(e);
      res.status(500).send(e);
    }
  };

  async function logData({ req, res, logger }) {
    const log = {
      requestMethod: req.method,
      requestUrl: req.originalUrl || req.url,
      requestHeaders: req.headers,
      requestTime: req.startTime,
      requestParams: req.params,
      requestQuery: req.query,
      requestBody: req.body,
      responseTime: new Date(),
      responseBody: res.body,
    };
    logger.info('Log data ', { log });

    // todo - log requests into files based on data
    await fsPromise.appendFile(
      __dirname + '/request_logs.txt',
      JSON.stringify(log) + '\n\n',
      (err) => {
        if (err) {
          logger.error(err);
        }
      }
    );
  }
};
