const cozinhaSchema = require("../models/ModelSchema");

const database = require("../database/moogoseConnect")

const todasAsCozinhas = async (req, res) => {}

const cozinhaPorId = async (req, res) => {}

const cadastrarCozinha = async (req, res) => {}

const atualizarCadastroPorId = async (req, res) => {}

const deletarCadastro = async (req, res) => {}

module.exports = {
    todasAsCozinhas,
    cozinhaPorId,
    cadastrarCozinha,
    atualizarCadastroPorId,
    deletarCadastro
}