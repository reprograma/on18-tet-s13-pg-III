const mongoose = require("mongoose");
const UserSchema = require("../models/UserSchema");
const BibliotecaSchema = require("../models/BibliotecaSchema");
const bcrypt = require("bcrypt");
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
      biblioteca: salvarBiblioteca,
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
  if (id.length < 24 || id.length > 24) {
    return res.status(404).json({
      message: `Por favor digite o id da biblioteca com 24 caracteres.`,
    });
  }
  try {
    const biblioteca = await BibliotecaSchema.find({ id });
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
  const { id } = req.params;
  try {
    if (id.length < 24 || id.length > 24) {
      return res.status(404).json({
        message: `Por favor digite o id da biblioteca com 24 caracteres.`,
      });
    }
    const bibliotecaEncontrada = await BibliotecaSchema.deleteOne({ id });
    if (bibliotecaEncontrada.deletedCount === 1) {
      return res
        .status(200)
        .send({ message: `A biblioteca foi deletada com sucesso!` });
    } else {
      return res
        .status(404)
        .send({ message: "A biblioteca não foi encontrada." });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//patch
const alterarBiblioteca = async (req, res) => {
  const { id } = req.params;
  const {
    nome,
    iniciativa_privada,
    endereco: {
      cep,
      rua,
      numero,
      complemento,
      referencia,
      estado,
      cidade,
      bairro,
    },
    bairros_atuantes,
    site,
    atividades_disponiveis,
    pessoa_responsavel,
  } = req.body;
  try {
    if (id.length < 24 || id.length > 24) {
      return res.status(404).json({
        message: `Por favor digite o id da biblioteca com 24 caracteres.`,
      });
    }
    const bibliotecaEncontrada = await BibliotecaSchema.updateOne({
      nome,
      iniciativa_privada,
      endereco: {
        cep,
        rua,
        numero,
        complemento,
        referencia,
        estado,
        cidade,
        bairro,
      },
      bairros_atuantes,
      site,
      atividades_disponiveis,
      pessoa_responsavel,
    });
    const bibliotecaAtualizadaPorId = await BibliotecaSchema.find({ id });
    if (bibliotecaAtualizadaPorId.length == 0) {
      return res.status(404).json({
        message: `A biblioteca não foi encontrada.`,
      });
    }
    res.json({
      message: "Biblioteca atualizada com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(users);
  });
};

const criarUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;

  const emailExists = await UserSchema.exists({ email: req.body.email });

  if (emailExists) {
    return res.status(409).send({
      message: "Email já cadastrado",
    });
  }

  try {
    const newUser = new UserSchema(req.body);

    const savedUser = await newUser.save();

    res.status(201).send({
      message: " seu user foi criado com  sucesso",
      savedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  getAll,
  buscarBibliotecaId,
  criarBiblioteca,
  biblioteca,
  alterarBiblioteca,
  deletarBiblioteca,
  criarUser,
};
