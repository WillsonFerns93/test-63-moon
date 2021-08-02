const addEmployees = require('./add-employees');

const getEmployeeDetails = require('./get-employee-details');

// getEmployeeDetails({
//   employeeId: 'A0001',
// });

module.exports = Object.freeze({
  addEmployees,
  getEmployeeDetails,
});
