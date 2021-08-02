const mysql = require('mysql2/promise');

async function createConnection() {
  const connection = mysql.createConnection({
    host: '192.168.0.104',
    port: '3306',
    database: 'test_dev',
    user: 'root',
    password: 'root',
  });

  return connection;
}

const connection = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: '3306',
  database: 'test_dev',
  user: 'user123',
  password: 'password',
});

async function execute({ query, values, nestTables }) {
  let connection;
  try {
    connection = await createConnection();

    return connection.execute({
      sql: query,
      values: values ? values : [],
      nestTables: nestTables ? nestTables : false,
    });
  } catch (e) {
    throw e;
  } finally {
    if (connection) {
      await connection.release();
    }
  }
}

module.exports = { connection, execute };
