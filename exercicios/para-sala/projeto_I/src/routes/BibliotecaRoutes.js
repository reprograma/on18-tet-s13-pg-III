const express = require('express')

const router = express.Router()

const controller = require('../controllers/BibliotecaController')

router.post("/biblioteca",controller.criarBiblioteca)

module.exports = router 