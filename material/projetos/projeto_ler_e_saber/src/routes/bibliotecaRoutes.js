const express = require("express");
const router = express.Router();
const controller = require("../controllers/bibliotecaController");

router.post("/", controller.criarBiblioteca);
router.get("/", controller.biblioteca);
router.get("/:id", controller.buscarBibliotecaId);
router.delete("/:id", controller.deletarBiblioteca);
router.patch("/:id", controller.alterarBiblioteca);

module.exports = router;
