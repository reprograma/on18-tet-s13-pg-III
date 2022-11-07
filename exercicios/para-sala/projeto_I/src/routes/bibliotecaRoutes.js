const express = require("express");
const router = express.Router();

const controller = require("../controller/bibliotecaController");

router.get("/", controller.getBiblioteca)
router.post("/", controller.criarBiblioteca)
router.get("/:id", controller.getById)
router.delete("/:id", controller.deleteById)
router.patch("/:id", controller.atualizaTelefone)

module.exports = router;