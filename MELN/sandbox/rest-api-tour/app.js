// Include the Express Framework
const express = require('express');

//include Cors to allow cross origin request
const cors = require('cors');

//Initiate the app
const app = express();

//allow cross origin requests
app.use(cors());

// load fruits.js
const fruits = require('./routes/fruits');
app.use('/fruits',fruits);

//
let port = 3000;

//Serving to port 
app.listen(port, () =>  {
	console.log(`Listening to port ${port}`);
});



const items = require('./routes/items');
app.use('/items', items);

const users = require('./routes/users');
app.use('/users', users);
