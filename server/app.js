const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB 연결 성공'))
  .catch(e => console.log('MongoDB error: ', e));

// connection test
app.get('/api/hello', (req, res) => {
	res.send('back connected!');
});

const users = require('./src/routes/users');
const groups = require('./src/routes/groups');
const ranks = require('./src/routes/ranks');

app.use('/api/users', users);
app.use('/api/groups', groups);
app.use('/api/ranks', ranks);

module.exports = app;
