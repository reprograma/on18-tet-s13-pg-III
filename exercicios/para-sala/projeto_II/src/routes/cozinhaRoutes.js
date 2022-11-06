const rotas = require("express").Router()
const controller = require("../controllers/cozinhaController")

rotas.get("/buscar", controller.buscarCozinha)
rotas.get("/listar", controller.buscarTodasCozinhas)
rotas.post("/criar", controller.criarCozinha)

module.exports = rotas