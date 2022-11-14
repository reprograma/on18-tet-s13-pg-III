const express = require("express")

const router = express.Router()

const controller = require("../controller/cozinhaController")

router.post("/criar", controller.criarCozinha)
router.get("/buscar", controller.buscarCozinha)
router.get("/buscar/:id", controller.encontrarCozinha)
router.delete("/deletar/:id", controller.deletarCozinha)

module.exports = router