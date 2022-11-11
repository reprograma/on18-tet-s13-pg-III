const express = require("express")
const router = express.Router()

const controller = require('../controllers/cozinhaController')

router.get('/buscar', controller.buscarCozinhas)
router.get('/:id', controller.buscarCozinhaPorId)

router.post('/cadastrar', controller.cadastrarCozinha)

router.delete('/:id', controller.deletarCozinha)

router.patch('/:id', controller.alterarCozinha)

module.exports = router