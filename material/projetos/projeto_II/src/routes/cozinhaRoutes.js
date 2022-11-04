const express = require("express")
const router = express.Router()

const controller = require('../controllers/cozinhaController')

router.get('/cozinha', controller.buscarCozinhas)
router.get('/cozinha/:id', controller.buscarCozinhaPorId)

router.post('/cozinha', controller.cadastrarCozinha)

router.delete('/cozinha/:id', controller.deletarCozinha)

router.patch('/cozinha/:id', controller.alterarCozinha)

module.exports = router