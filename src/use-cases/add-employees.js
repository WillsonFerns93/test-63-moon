const employeeDb = require('../data-access').employeeDb;

async function addEmployees({ employees }) {
  await employeeDb.insertEmployees({ employees });
}

module.exports = addEmployees;
