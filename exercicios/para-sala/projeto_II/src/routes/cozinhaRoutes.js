const express = require('express')
const router = express.Router()

const controller = require('../controllers/cozinhaController')

router.post('/cadastrar', controller.cadastrarCozinha)
router.get('/exibir', controller.exibeCozinhas)

module.exports = router