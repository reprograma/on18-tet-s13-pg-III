const express = require('express');
const router = express.Router();

const controller = require('../controllers/cozinhaController');

router.get("/cozinha", controller.buscarCozinhas);
router.post("/cozinha", controller.criarCozinha);
router.get("/cozinha/:id", controller.buscarCozinhaId);
router.delete("/cozinha/:id", controller.deletarCozinha);
router.patch("/cozinha/:id", controller.atualizarCozinha)

module.exports = router;
