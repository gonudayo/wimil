const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const config = require('./src/config/key');

const { User } = require("./src/models/User");
const mongoose = require('mongoose');
mongoose
.connect(config.mongoURI)
.then(() => console.log("3 2 1 Lift Off ."))
.catch((e) => console.log('MongoDB error: ', e));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/register', (req, res) => {
	const user = new User(req.body);
	
	user.save((err, userInfo) => {
		if(err) return res.json({ success: false, err});
		return res.status(200).json({
			success: true
		});
	});
});

app.listen(port, () => {
  console.log("Engine On 우주로 ~")
});