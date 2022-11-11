const express = require('express')

const router = express.Router()

const controller = require('../controllers/BibliotecaController')

router.post("/biblioteca",controller.criarBiblioteca)
router.delete("/biblioteca/:id",controller.deletarBibliotecaPorId)
router.get("/biblioteca/buscar", controller.buscarBiblioteca)
router.get("/biblioteca/:id", controller.buscaBibliotecaPorId)
router.patch("/atualizar/:id", controller.atualizarBiblioteca)






module.exports = router 