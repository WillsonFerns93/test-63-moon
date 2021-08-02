const connection = require('./connection').connection;
const TABLE = 'employees';

async function insertEmployees({ employees }) {
  const { statement, values } = prepareBulkInsert({ employees });

  const query = `INSERT INTO employees (EmpID, EmpName, Skills) values ${statement} `;

  const result = await connection.query({
    sql: query,
    values,
  });
}

function prepareBulkInsert({ employees }) {
  const statement = [];
  const values = [];

  for (const employee of employees) {
    let skills = null;
    if (employee.Skills) {
      skills = JSON.stringify(employee.Skills);
    }
    statement.push(`(?, ?, ?)`);
    values.push(employee.EmpID, employee.EmpName, skills);
  }
  return { statement, values };
}

async function getEmployeeDetailsById({ employeeId, fieldsToQuery }) {
  const query = `SELECT ${fieldsToQuery.join()} FROM ${TABLE} where EmpID = ?`;
  const result = await connection.query({
    sql: query,
    values: [employeeId],
  });
  return (result[0] && result[0][0]) || null;
}

module.exports = Object.freeze({
  insertEmployees,
  getEmployeeDetailsById,
});
