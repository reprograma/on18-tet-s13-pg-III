const express = require("express");
const router = express.Router();
const controller = require("../controllers/bibliotecaController");

router.post("/biblioteca", controller.criarBiblioteca);
router.get("/biblioteca", controller.biblioteca);
router.get("/biblioteca/:id", controller.buscarBibliotecaId);
router.delete("/biblioteca/:id", controller.deletarBiblioteca);
router.patch("/biblioteca/:id", controller.alterarBiblioteca);

// DELETE "/biblioteca/[ID]" Deverá deletar uma biblioteca por id específico e retorna mensagem;

//  PATCH "/biblioteca/[ID]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado;

module.exports = router;
