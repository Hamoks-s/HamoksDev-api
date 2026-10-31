const express = require('express')
const mysql = require('mysql2/promise')
require('dotenv').config();


const app = express();
const PORT = 3000;

app.disable('x-powered-by') // Remove the "X-Powered-By: Express" response header so the server doesn't advertise what software it runs

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 50
});

app.get('/status', (req, res) => {
    return res.status(200).json({ status : 'OK'})
})

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});