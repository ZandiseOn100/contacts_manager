const mysql = require("mysql2");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

module.exports = db;
