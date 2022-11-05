const express = require("express")
const router = express.Router()

const controller = require('../controllers/bibliotecaController')

router.get('/cozinha', controller.buscarBibliotecas)

module.exports = router