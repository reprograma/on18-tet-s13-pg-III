//importa express, mongoose e função de router
const express = require('express')
const { get } = require('mongoose')
const router = express.Router()

//criar controller, puxando dados de arquivo externo
const controller = require('../controllers/cozinhaController')
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

const { checkAuth } = require('../middlewares/auth')
//Rotas Post, Get, Delete e Patch e suas funções

router.post('/cadastrar', checkAuth, controller.cadastrarCozinha)
router.get('/exibir', checkAuth, controller.exibeCozinhas)
router.get('/:id', checkAuth, controller.buscarCozinhaPorId)
router.delete('/deletar/:id', checkAuth, controller.deletarCozinha)
router.patch('/atualizar/:id', checkAuth, controller.atualizarCozinha)
router.post('/login', authController.login)
router.post('/create', userController.createUser)

//exporta dados para uso externo
module.exports = router