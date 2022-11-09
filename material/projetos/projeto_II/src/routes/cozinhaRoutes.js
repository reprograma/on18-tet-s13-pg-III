const express = require("express")
const router = express.Router()

const controller = require('../controllers/cozinhaController')

router.get('/buscar', controller.buscarCozinhas)
router.get('/buscar/:id', controller.buscarCozinhaPorId)

router.post('/cadastrar', controller.cadastrarCozinha)

router.delete('/deletar/:id', controller.deletarCozinha)

router.patch('/alterar/:id', controller.alterarCozinha)

module.exports = router