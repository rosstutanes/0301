const express = require('express');

const cors = require('cors');

const router = express.Router();

router.use((req, res, next) => {
	console.log(`Time: ${Date.now()}`)
	next();
});

router.use('/', (req,res) => {
	res.send('Users Page');
});

// router.use('/', (req,res, next) => {
// 	res.send('Users Page');
// 	next();
// });


// router.use((req, res) => {
// 	console.log(`Time: ${Date.now()}`)

// });




module.exports = router;

