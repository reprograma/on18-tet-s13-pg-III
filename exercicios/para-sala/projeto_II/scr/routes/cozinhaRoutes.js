const express = require ('express');
const router = express.Router();


const controller = require('../controllers/cozinhaController');

router.post('/criar', controller.criarCozinha);


module.exports = router;


