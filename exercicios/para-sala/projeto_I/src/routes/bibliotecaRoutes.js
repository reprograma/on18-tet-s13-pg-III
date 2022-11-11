const express = require('express');
const router = express.Router();

const controller = require('../controllers/bibliotecaController');

router.post("/criar", controller.criarBiblioteca);
router.get("/buscar", controller.buscarBibliotecas);
router.get("/:id", controller.buscarBibliotecaPorId);
router.patch("/atualizar/:id", controller.atualizarBiblioteca);
router.delete("/:id/deletar", controller.deletarBiblioteca);


module.exports = router;