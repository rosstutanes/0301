const express = require('express');

//Include the router used
const router = express.Router();

//Retrieve all fruits
router.get('/', (req, res) => {
	res.send({message: 'List of all Fruits'});
});


//post
router.post('/', (req,res) => {
	res.send({message: 'OK!'});
});

//get
// router.get('/:id', (req,res) => {
// 	res.send({message: 'Showing one item'});
// });

//params
router.get('/:id', (req,res) => {
	res.send(req.params);
});


//put
router.put('/:id', (req,res) =>{
	res.send({message: 'Put put'});
});

//delete
router.delete('/:id', (req,res) =>{
	res.send({message: 'Burado'});
});




module.exports = router;


