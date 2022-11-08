const express = require("express")
const router = express.Router()

const controller = require('../controllers/bibliotecaController')

router.get('/biblioteca', controller.buscarBibliotecas)







module.exports = router