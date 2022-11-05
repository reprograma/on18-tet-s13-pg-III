const mongoose = require("mongoose");
const BibliotecaSchema = require("../models/BibliotecaSchema");
const criarBiblioteca = async (req, res) => {
  const {
    nome,
    cnpj,
    telefone,
    iniciativa_privada,
    endereco,
    cep,
    rua,
    numero,
    complemento,
    referencia,
    estado,
    cidade,
    bairro,
    bairros_atuantes,
    site,
    atividades_disponiveis,
    pessoa_responsavel,
  } = req.body;
  try {
    const biblioteca = new BibliotecaSchema({
      nome: req.body.nome,
      cnpj: req.body.cnpj,
      telefone: req.body.telefone,
      iniciativa_privada: req.body.iniciativa_privada,
      endereco: req.body.endereco,
      cep: req.body.cep,
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      referencia: req.body.referencia,
      estado: req.body.estado,
      cidade: req.body.cidade,
      bairro: req.body.bairro,
      bairros_atuantes: req.body.bairros_atuantes,
      site: req.body.site,
      atividades_disponiveis: req.body.atividades_disponiveis,
      pessoa_responsavel: req.body.pessoa_responsavel,
    });
    const salvarBiblioteca = await biblioteca.save();
    res.status(201).json({
      paciente: salvarBiblioteca,
    });
  } catch (error) {
    res.status(400).json({
      mensagem: error.message,
    });
  }
};
const buscarBiblioteca = async (req, res) => {
  const { id } = req.query;
  let query = {};

  if (id) query.id = new RegExp(id, "i");
  try {
    const biblioteca = await BibliotecaSchema.find(query);
    res.status(200).json(biblioteca);
  } catch (error) {
    res.status(500).json({
      mensagem: error.message,
    });
  }
};
const Biblioteca = async (req, res) => {
  const { id } = req.params;
  try {
    const biblioteca = await db();
    const bibliotecaEncontrada = biblioteca.find(
      (biblioteca) => biblioteca.id == id
    );
    if (bibliotecaEncontrada == undefined) {
      return res.status(404).send({
        message: "Biblioteca não encontrada",
      });
    }
    res.status(200).send(bibliotecaEncontrada);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  buscarBiblioteca,
  criarBiblioteca,
  Biblioteca,
};
