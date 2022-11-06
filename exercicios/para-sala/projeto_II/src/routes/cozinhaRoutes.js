const rotas = require("express").Router()
const controller = require("../controllers/cozinhaController")

rotas.get("/cozinha", controller.buscarTodasCozinhas)
rotas.get("/cozinha/:id", controller.buscarCozinhaId)
rotas.post("/criar", controller.criarCozinha)
// rotas.delete("/cozinha/:id", controller.deletarCozinha)

module.exports = rotas