const express = require("express");
const router = express.Router();

const userController = require("../controllers/usuarioController")
const authController = require("../controllers/authController")
const {checkAuth} = require("../middlewares/auth")

const controller = require("../controllers/cozinhaControllers");

router.post("/usuario/cadastro", userController.createUser)
router.post("/usuario/login", authController.login)

router.get("/buscar", checkAuth, controller.showRestaurantes)
router.post("/cadastro", checkAuth, controller.cadastrarRestaurante)
router.delete("/deletar", checkAuth, controller.deleteRestaurante)
router.patch("/alteracao/:id", checkAuth,controller.alterarCadastro)

module.exports = router;