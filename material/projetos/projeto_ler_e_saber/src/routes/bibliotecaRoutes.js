const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const controller = require("../controllers/bibliotecaController");
const userController = require("../controllers/userController");
const { checkAuth } = require("../middlewares/auth");

router.post("/", controller.criarBiblioteca);
router.get("/", controller.biblioteca);
router.get("/:id", controller.buscarBibliotecaId);
router.delete("/:id", checkAuth, controller.deletarBiblioteca);
router.patch("/:id", checkAuth, controller.alterarBiblioteca);
router.post("/user", userController.criarUser);
router.post("/login", authController.login);

module.exports = router;
