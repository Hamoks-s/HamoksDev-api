const express = require('express')
require('dotenv').config();


const app = express();
const PORT = 3000;

app.disable('x-powered-by') // Remove the "X-Powered-By: Express" response header so the server doesn't advertise what software it runs

app.get('/status', (req, res) => {
    return res.status(200).json({ status : 'OK'})
})

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});