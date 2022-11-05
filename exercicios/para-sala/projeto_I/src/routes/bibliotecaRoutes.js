const express = require('express');
const router = express.Router();

const controller = require('../controllers/bibliotecaController');

router.post("/criar", controller.criarBiblioteca);
router.get("/buscar/:id", controller.buscarBibliotecasPorID);
router.get("/buscar", controller.buscarBibliotecas);


module.exports = router;