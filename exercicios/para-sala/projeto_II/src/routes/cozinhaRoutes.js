const express = require("express");
const router = express.Router();

const controller = require("../controllers/cozinhaController");
const authController = require("../controllers/authController")

const { checkAuth } = require("../middlewares/auth")

router.post("/criar", checkAuth, controller.criarCozinha);
router.get("/busca", controller.buscarTodasCozinhas);
router.delete("/:id", controller.deletarCozinha),
router.post("/login", authController.login);


module.exports = router;
