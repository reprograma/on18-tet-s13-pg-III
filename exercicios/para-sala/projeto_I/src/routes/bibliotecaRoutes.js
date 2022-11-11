const express = require("express")
const rotas = express.Router()

const controller = require("../controllers/BibliotecaController")

rotas.get("/", controller.todasBibliotecas)

rotas.post("/criar", controller.criarBiblioteca)
rotas.patch("/atualizar/:id", controller.atualizarBiblioteca)
rotas.get("/buscar/:id", controller.bibliotecaPorId)
rotas.delete("/deletar/:id", controller.deletarBiblioteca)

module.exports = rotas
