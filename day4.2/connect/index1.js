// Importing express module
const express = require('express');
const app = express();

app.use(express.json());

app.get('/',
	(req, res) => {
		res.sendFile(__dirname + '/index.html');
	});

app.post('/',
	(req, res) => {
		const { username, password } = req.body;
		const { authorization } = req.headers;
		res.send(
			{
				username,
				password,
				authorization,
			});
	});

app.listen(3000,
	() => {
		console.log("hello");
   
	});
   

