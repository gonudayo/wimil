const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

const mongoose = require('mongoose');
mongoose
.connect(process.env.DB_HOST)
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});