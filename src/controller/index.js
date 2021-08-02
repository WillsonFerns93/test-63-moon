const testService = async () => {
  return {
    statusCode: 200,
    body: {
      data: 'test message',
    },
  };
};

const addEmpolyeesAction = require('./add-employees');

const getEmployeeDetailsAction = require('./get-employee-details');

const controller = Object.freeze({
  addEmpolyeesAction,
  getEmployeeDetailsAction,
  testService,
});

module.exports = controller;
