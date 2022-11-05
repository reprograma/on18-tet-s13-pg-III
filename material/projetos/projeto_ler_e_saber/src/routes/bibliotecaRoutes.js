const express = require("express");
const router = express.Router();
const controller = require("../controllers/bibliotecaController");

router.post("/biblioteca", controller.criarBiblioteca);
router.get("/biblioteca", controller.Biblioteca);
router.get("/biblioteca/:id", controller.buscarBiblioteca);

module.exports = router;
