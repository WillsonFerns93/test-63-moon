const controllers = require('./controller');
const callback = require('./callback');

class RestRouter {
  constructor(router, logger) {
    this.router = router;
    this.logger = logger;
  }

  start() {
    this.employeeRoutes();
    return this.router;
  }

  employeeRoutes() {
    this.router.post(
      `/employees`,
      callback({
        controller: controllers.addEmpolyeesAction,
      })
    );

    this.router.get(
      `/employees/:id/skills`,
      callback({
        controller: controllers.getEmployeeDetailsAction,
      })
    );

    this.router.get(
      `/test`,
      callback({
        controller: controllers.testService,
      })
    );
  }
}

module.exports = { RestRouter };
