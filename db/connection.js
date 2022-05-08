const mysql = require('mysql2');
require('dotenv').config();

// connect to database
const db = mysql.createConnection({
    // connection 
    host: 'localhost',
    // username
    user: process.env.DB_USER,
    // password
    password: process.env.DB_PASSWORD,
    // database
    database: 'employee_data'

},
console.log('Connected to database')
);

module.exports = db;