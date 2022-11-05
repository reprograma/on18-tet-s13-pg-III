const express = require('express')
const { get } = require('mongoose')
const router = express.Router()

const controller = require('../controllers/cozinhaController')

router.post('/cadastrar', controller.cadastrarCozinha)
router.get('/exibir', controller.exibeCozinhas)
router.get('/:id', controller.buscarCozinhaPorId)
router.delete('/deletar/:id', controller.deletarCozinha)
router.patch('/atualizar/:id', controller.atualizarCozinha)

module.exports = router