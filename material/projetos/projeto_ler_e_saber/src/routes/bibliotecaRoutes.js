const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const controller = require("../controllers/bibliotecaController");
const { checkAuth } = require("../middlewares/auth");

router.post("/", controller.criarBiblioteca);
router.get("/", controller.biblioteca);
router.get("/:id", controller.buscarBibliotecaId);
router.post("/user", controller.criarUser);
router.delete("/:id", checkAuth, controller.deletarBiblioteca);
router.patch("/:id", controller.alterarBiblioteca);
router.post("/login", authController.login);

module.exports = router;
