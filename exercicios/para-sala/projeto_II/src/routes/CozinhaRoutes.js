const express = require('express')
const router = express.Router();

const controller = require("../controller/cozinhaController")


router.post("/cozinha", controller.criarCozinha)
router.get( "/cozinha", controller.buscarCozinha)
router.get("/cozinha/:id", controller.buscarCozinhaPorId)
router.delete("/cozinha/:id", controller.excluirCozinha)
router.patch("/cozinha/:id", controller.atualizarCozinha)

module.exports = router;