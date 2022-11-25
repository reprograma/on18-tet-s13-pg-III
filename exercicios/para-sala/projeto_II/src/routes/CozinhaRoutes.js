const express = require('express')
const router = express.Router();

const controller = require("../controller/cozinhaController")


router.post("/cadastro", controller.criarCozinha)
router.get( "/busca", controller.buscarCozinha)
router.get("/:id", controller.buscarCozinhaPorId)
router.delete("/excluir/:id", controller.excluirCozinhaId)
router.patch("/atualizar/:id", controller.atualizarCozinha)

module.exports = router;