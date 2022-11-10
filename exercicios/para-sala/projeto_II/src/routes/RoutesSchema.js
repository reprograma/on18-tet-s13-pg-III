const express = require('express');
const rotas = require('express').Router();
const controller = require('../controller/controllerSchema');

rotas.post("/cadastrar", controller.cadastrarCozinha);

rotas.get("/", controller.todasAsCozinhas);
rotas.get("/:id", controller.cozinhaPorId);

rotas.put("/:id/atualizar", controller.atualizarCadastroPorId)

rotas.delete("/deletar/:id", controller.deletarCadastro)

module.exports = rotas