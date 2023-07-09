const mysql = require('mysql2');
require('dotenv').config();

// Create a new connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Set the database to employee_tracker
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  connection.query('USE employee_tracker', (err) => {
    connection.release();
    if (err) {
      console.error('Error setting database:', err);
      return;
    }
    console.log('Connected to the database');
  });
});

// Export the pool as a reusable connection
module.exports = pool.promise();
