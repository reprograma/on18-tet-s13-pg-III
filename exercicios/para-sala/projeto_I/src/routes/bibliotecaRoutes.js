const controller = require('../controllers/bibliotecaController')

const express = require("express")

const router = express.Router()

router.get("/biblioteca" , controller.biblioteca)
router.get("/biblioteca/:id", controller.buscarBiblioteca)
router.post("/biblioteca", controller.criarBiblioteca)

module.exports = router

