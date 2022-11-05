const express = require('express');

const routes = express.Router();
const bibliotecaController = require("../controllers/BibliotecaController")

routes.get("/biblioteca", bibliotecaController.buscarBibliotecas)

routes.get("/biblioteca/:id", bibliotecaController.buscarBibliotecaPorId)

routes.post("/biblioteca", bibliotecaController.criarBiblioteca)

module.exports = routes;