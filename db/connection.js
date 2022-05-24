const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'HugoAl@1991',
  database: 'election' ,
  port: '3306'
});

module.exports = db;
