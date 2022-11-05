const rotas = require("express").Router()
const controller = require("../controllers/cozinhaController")


rotas.post("/criar", controller.criarCozinha)

module.exports = rotas