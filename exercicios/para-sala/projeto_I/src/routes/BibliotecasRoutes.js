const express = require("express");
const router = express.Router();

const controller = require("../controllers/bibliotecaController");

router.post("/criar", controller.criarBiblioteca);
router.get("/biblioteca", controller.buscarBibliotecas);
router.get("/:id", controller.buscarBibliotecasId);
router.delete("/:id", controller.deletarBibliotecaId);
router.patch("/:id", controller.atualizarBibliotecaId);

module.exports = router;