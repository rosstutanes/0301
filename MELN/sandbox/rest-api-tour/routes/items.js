const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send({message: 'Get a gun '});
});

router.post('/', (req,res) =>{
	res.send({message: 'Post it in facebook'});
});

router.get('/:id', (req,res) => {
	res.send({message: 'Get and Show one bullet'});
});

router.put('/:id', (req,res) => {
	res.send({message: 'Put bullet in the gun'});
});

router.delete('/:id', (req,res) => {
	res.send({message: 'Delete all enemies'});
});

module.exports = router;

