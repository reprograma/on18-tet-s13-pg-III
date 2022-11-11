const express = require('express');
const router = express.Router();

const controller = require("../controllers/cozinhaControllers");

router.post("/criar", controller.criarCozinha);
router.get("/", controller.buscarTodasCozinhas);
router.get("/:id", controller.buscarCozinhaId);
router.delete("/:id", controller.deletarCozinha);


module.exports = router;