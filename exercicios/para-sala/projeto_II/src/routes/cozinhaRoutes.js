const express = require('express');
const router = express.Router();

const controller = require('../controllers/cozinhaController');


router.get('/buscar', controller.buscarCozinha);
rotas.get("/:id/cozinha", controller.obterCozinha);

router.post('/criar', controller.criarCozinha);
rotas.delete("/:id/deletar", controller.deletarCozinha);
rotas.patch("/:id/atualizar", controller.atualizarCozinha);


module.exports = router;