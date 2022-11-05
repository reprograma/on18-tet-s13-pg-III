const express = require("express");
const router = express.Router();

const controller = require("../controller/bibliotecaController");

router.get("/biblioteca", controller.getBiblioteca)
router.post("/", controller.criarBiblioteca)

module.exports = router;