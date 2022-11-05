const express = require("express");
const router = express.Router();

const controller = require("../controller/bibliotecaController");

router.post("/criar", controller.criarBiblioteca)

module.exports = router;