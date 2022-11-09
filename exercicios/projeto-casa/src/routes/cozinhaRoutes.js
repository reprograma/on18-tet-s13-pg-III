const express = require("express");
const router = express.Router();

const controller = require("../controllers/cozinhaControllers");

router.get("/buscar", controller.showRestaurantes)
router.post("/cadastro", controller.cadastrarRestaurante)
router.delete("/deletar",controller.deleteRestaurante)
//router.get("/buscar/:id",)
router.patch("/alteracao/:id",controller.alterarCadastro)

module.exports = router;