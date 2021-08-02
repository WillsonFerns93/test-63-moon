const employeeDb = require('../data-access').employeeDb;

async function getEmployeeDetails({ employeeId, fieldsToQuery }) {
  if (!fieldsToQuery || !Array.isArray(fieldsToQuery)) {
    fieldsToQuery = ['EmpID', 'EmpName', 'Skills'];
  }
  const result = await employeeDb.getEmployeeDetailsById({
    employeeId,
    fieldsToQuery,
  });

  if (!result) {
    throw new Error('Employee not found');
  }
  if (Object.prototype.hasOwnProperty.call(result, 'Skills')) {
    result.Skills = result['Skills'] ? JSON.parse(result['Skills']) : [];
  }
  console.debug(result);
  return result;
}

module.exports = getEmployeeDetails;
