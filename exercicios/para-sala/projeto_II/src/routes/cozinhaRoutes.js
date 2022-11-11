const rotas = require("express").Router()
const controller = require("../controllers/cozinhaController")

rotas.get("/", controller.buscarTodasCozinhas)
rotas.get("/:id", controller.buscarCozinhaId)
rotas.post("/", controller.criarCozinha)
rotas.delete("/:id", controller.deletarCozinha)
rotas.patch("/:id", controller.atualizarCozinha)

module.exports = rotas