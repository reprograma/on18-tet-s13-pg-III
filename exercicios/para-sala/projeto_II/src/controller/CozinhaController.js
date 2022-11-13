const mongoose = require('mongoose')

const CozinhaSchema = require("../models/CozinhaSchema")

const criarCozinha = async(request, response) =>{
    try{


      const { nome, cnpj, telefone, iniciativa_privada, endereco, bairros, site, atividades_disponiveis, responsavel } = request.body
      
      if(!nome || !cnpj || !telefone|| !atividades_disponiveis || !responsavel || !endereco){
        response.status(401).json({
          mensagem: "Por gentileza se atentar aos campos obrigatórios e preenche-los corretamente"
        })
      }
      
      
      const cozinha = new CozinhaSchema({
        nome: request.body.nome,
        cnpj: request.body.cnpj,
        telefone: request.body.telefone,
        iniciativa_privada: request.body.iniciativa_privada,
        endereco: request.body.endereco,
        bairros: request.body.bairros,
        site: request.body.site,
        atividades_disponiveis: request.body.atividades_disponiveis,
        resposavel: request.body.responsavel
      })

      const salvarCozinha = await cozinha.save();
      response.status(201).json({
        cozinha: salvarCozinha
      })
    }catch(error){
        response.status(400).json({
            message: error.message
        })
    }
}

const buscarCozinha = async( request,response) =>{
    const { nome } = request.query;
    const {  cnpj } = request.query;


    let query = {  };

    if (nome) query.nome = new RegExp(nome, "i")
    if (cnpj) query.cnpj = new RegExp(cnpj, "j")

    try{
      const cozinha = await CozinhaSchema.find(query)
      response.status(200).json(cozinha)
    }catch(error){
      response.status(500).json({
        message: error.message
      })
    }
}

const buscarCozinhaPorId = async(request, response) => {
   try{
      const cozinha = await CozinhaSchema.findById(request.params.findById)
      response.status(200).json(cozinha)

   }catch(error){
    response.status(500).json({
      message: error.message
    })
   }
}

const excluirCozinha  = async (request, response) => {
    try{
      const cozinha = await CozinhaSchema.findById(request.params.id)

      await cozinha.delete();

      response.status(200).json({
        mensagem: "Cozinha/Cadastro removido com sucesso"
      })
    }catch(error){
      response.status(400).json({
        message: error.message
      })
    }
}

const atualizarCozinha = async (request, response) => {
    try{
        const { nome, cnpj, endereco, bairros, site, atividades_disponiveis, responsavel } = request.body;

        const procurarCozinha = await CozinhaSchema.findById(request.params.id)

       procurarCozinha.nome = nome || procurarCozinha.nome
       procurarCozinha.cnpj = cnpj || procurarCozinha.cnpj
       procurarCozinha.endereco = endereco|| procurarCozinha.endereco
       procurarCozinha.bairros= bairros|| procurarCozinha.bairros
       procurarCozinha.site = site || procurarCozinha.site
       procurarCozinha.atividades_disponiveis = atividades_disponiveis || procurarCozinha.atividades_disponiveis
       procurarCozinha.responsavel = responsavel || procurarCozinha.resposavel


        const cozinhaAtualizada = procurarCozinha.save();
        response.status(200).json({
          mensagem: `Cadastro de ${cozinhaAtualizada.nome} atualizado com sucesso!!`
        })

    }catch(error){
      response.status(400).json({
        message: error.message
      })
    }
}


module.exports = {
    criarCozinha,
    buscarCozinha,
    buscarCozinhaPorId,
    excluirCozinha,
    atualizarCozinha
}