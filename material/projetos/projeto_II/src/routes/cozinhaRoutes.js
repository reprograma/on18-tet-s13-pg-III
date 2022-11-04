const express = require("express")
const router = express.Router()

const controller = require('../controllers/cozinhaController')

router.get('/cozinha', controller.buscarCozinhas)

module.exports = router