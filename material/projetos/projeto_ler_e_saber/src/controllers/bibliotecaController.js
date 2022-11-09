const BibliotecaSchema = require("../models/BibliotecaSchema");
//post
const criarBiblioteca = async (req, res) => {
  try {
    const biblioteca = new BibliotecaSchema({
      nome: req.body.nome,
      cnpj: req.body.cnpj,
      telefone: req.body.telefone,
      iniciativa_privada: req.body.iniciativa_privada,
      endereco: req.body.endereco,
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
//Get
const buscarBibliotecaId = async (req, res) => {
  const { id } = req.params;

  try {
    const biblioteca = await BibliotecaSchema.findById(req.params.id);
    res.status(200).json(biblioteca);
  } catch (error) {
    res.status(500).json({
      mensagem: error.message,
    });
  }
};
//get
const biblioteca = async (req, res) => {
  try {
    const biblioteca = await BibliotecaSchema.find();
    res.status(200).json(biblioteca);
  } catch (error) {
    res.status(500).json({
      mensagem: error.message,
    });
  }
};

//delete
const deletarBiblioteca = async (req, res) => {
  try {
    const { id } = req.params;
    const biblioteca = await BibliotecaSchema.findById(id);
    if (biblioteca == null) {
      return res.status(404).json({
        message: "biblioteca com este id ${id} não encontrada",
      });
    }
    await biblioteca.remove();

    res.status(200).json({
      mensagem: `Biblioteca com este id ${id} removida do sistema.`,
    });
  } catch (error) {
    res.status(400).json({
      mensagem: error.message,
    });
  }
};

//patch
const alterarBiblioteca = async (req, res) => {
  const { id } = req.body;
  const bibliotecas = await bibliotecas.BibliotecaSchema();
  const biblioteca = bibliotecas.find((biblioteca) => biblioteca.id == id);
  if (!biblioteca) {
    return response.status(404).send({
      message: `Biblioteca com o ${id} não encontrado!`,
    });
  }
  const {
    nome,
    iniciativa_privada,
    endereco,
    site,
    atividades_disponiveis,
    pessoa_responsavel,
  } = req.body;

  if (typeof nome != "string" || nome.trim() == "")
    return response.status(400).send({
      message: "O nome não pode ser vazio",
    });

  if (typeof numero != "number" || numero < 0) {
    return response.status(400).send("O numero é obrigatório");
  }

  if (nome) biblioteca.nome = nome;
  if (iniciativa_privada) biblioteca.iniciativa_privada = iniciativa_privada;
  if (endereco) biblioteca.endereco = endereco;
  if (atividades_disponiveis)
    biblioteca.atividades_disponiveis = atividades_disponiveis;
  if (site) biblioteca.site = site;
  if (pessoa_responsavel) biblioteca.pessoa_responsavel = pessoa_responsavel;
  res.status(200).send(biblioteca);
};

module.exports = {
  buscarBibliotecaId,
  criarBiblioteca,
  biblioteca,
  deletarBiblioteca,
  alterarBiblioteca,
};
