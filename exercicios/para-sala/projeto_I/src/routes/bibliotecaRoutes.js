const express = require('express');
const router = express.Router();

const controller = require('../controllers/bibliotecaController');

router.post("/criar", controller.criarBiblioteca);
router.get("/buscar/:id", controller.buscarBibliotecasPorID);
router.get("/listar", controller.listarBibliotecas);
router.patch("/atualizar/:id", controller.atualizarBiblioteca);
router.delete("/remover/:id", controller.removerBiblioteca);

module.exports = router;