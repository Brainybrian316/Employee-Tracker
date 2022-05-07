const mysql = require('mysql2');
require('dotenv').config();

// connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
},
console.log('Connected to database')
);

module.exports = db;