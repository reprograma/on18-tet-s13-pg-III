const mongoose = require("mongoose");

const CozinhaSchema = require("../models/CozinhaSchema");

const criarCozinha = async(request, response) => {
    const {nome, cnpj, telefone, iniciativa_privada, endereço, bairros_atuantes, site, atividades_disponiveis, pessoa_responsavel,} = request.body;

    try {
        const Cozinha = new CozinhaSchema({
            nome: nome,
            cnpj: cnpj,
            telefone: telefone,
            iniciativa_privada: iniciativa_privada,
            endereço: endereço, 
            bairros_atuantes: bairros_atuantes,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            pessoa_responsavel:  pessoa_responsavel,

        
        })

        const salvarCozinha = await cozinha.save();
        response.status(201).json({
            cozinha: salvarCozinha
        })
    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}

const buscarCozinha = async (request, response) => {
    const { nome } = request.query;
    
    let query = { };
    
    if (nome) query.nome = new RegExp(nome, 'i');

    try {
        const cozinhas = await CozinhaSchema.find(query);
        response.status(200).json(cozinhas)
        
    } catch (error) {
        response.status(500).json({
            mensagem: error.message
        })
    }
}
    
module.exports= {
    criarCozinha,
    buscarCozinha
}