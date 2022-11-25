const mongoose = require("mongoose");

const CozinhaSchema = require("../models/CozinhaSchema");

const criarCozinha = async (request, response) => {
  try {
    const {
      nome,
      cnpj,
      telefone,
      site,
      atividades_disponiveis,
      responsavel,
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
      bairros,
    } = request.body;

    const cnpjExists = await CozinhaSchema.find({ cnpj });

    if (cnpjExists.length !== 0) {
      return response.status(401).send({
        message: "CNPJ já cadastrado no nosso banco de dados",
      });
    }

    /*if(String(cnpj).length > 14){
    return response.status(400).json({
    message: "Cnpj inválido. Caracter a mais"
    })
    }else if(String(cnpj).length < 14){
     return response.status(400).json({
    message: "Cnpj inválido. Caracter a menos"
    })
    }*/

    const buscarBairro = await CozinhaSchema.find({ bairro });
    const buscarNome = await CozinhaSchema.fin({ nome });

    if (buscarBairro && buscarNome) {
      return response
        .status(400)
        .send({ message: "O nome desta cozinha já existe nesse bairro" });
    }

    const cozinha = new CozinhaSchema({
      nome: nome,
      cnpj: cnpj,
      telefone: telefone,
      iniciativa_privada: iniciativa_privada,
      atividades_disponiveis: atividades_disponiveis,
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
      bairros: bairros,
      site: site,
      responsavel: responsavel,
    });

    const salvarCozinha = await cozinha.save();
    response.status(201).json({
      cozinha: salvarCozinha,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

const buscarCozinha = async (request, response) => {
  try {
    const buscarCozinha = await CozinhaSchema.find(query);
    response.status(200).json(buscarCozinha);
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const buscarCozinhaPorId = async (request, response) => {
  try {
    const cozinha = await CozinhaSchema.findById(request.params.findById);
    response.status(200).json(cozinha);
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const excluirCozinhaId = async (request, response) => {
  try {
    const cozinha = await CozinhaSchema.findById(request.params.id);

    await cozinha.delete();

    /*
    const { id } = request.params;

    const deletarporId = await CozinhaSchema.deleteOne({ id })
   */

    response.status(200).json({
      mensagem: "Cozinha/Cadastro removido com sucesso",
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

const atualizarCozinha = async (request, response) => {
  try {
    const {
      nome,
      cnpj,
      endereco,
      bairros,
      site,
      atividades_disponiveis,
      responsavel,
    } = request.body;

    const procurarCozinha = await CozinhaSchema.findById(request.params.id);

    procurarCozinha.nome = nome || procurarCozinha.nome;
    procurarCozinha.cnpj = cnpj || procurarCozinha.cnpj;
    procurarCozinha.endereco = endereco || procurarCozinha.endereco;
    procurarCozinha.bairros = bairros || procurarCozinha.bairros;
    procurarCozinha.site = site || procurarCozinha.site;
    procurarCozinha.atividades_disponiveis =
      atividades_disponiveis || procurarCozinha.atividades_disponiveis;
    procurarCozinha.responsavel = responsavel || procurarCozinha.resposavel;

    const cozinhaAtualizada = procurarCozinha.save();
    response.status(200).json({
      mensagem: `Cadastro de ${cozinhaAtualizada.nome} atualizado com sucesso!!`,
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  criarCozinha,
  buscarCozinha,
  buscarCozinhaPorId,
  excluirCozinhaId,
  atualizarCozinha,
};
