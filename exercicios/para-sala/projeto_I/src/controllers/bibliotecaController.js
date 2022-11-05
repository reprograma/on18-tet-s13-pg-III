const mongoose = require('mongoose');

const bibliotecaSchema = require("../models/BibliotecaModel");

const criarBiblioteca = async(requisicao, resposta) => {
    const {nome, cnpj, telefone, iniciativa_privada, endereco, bairros_atuantes, site, atividades_disponiveis, responsavel } = requisicao.body;
    try{
        const biblioteca = new bibliotecaSchema({
            nome: nome,
            cnpj: cnpj,
            telefone: telefone,
            iniciativa_privada: iniciativa_privada,
            endereco: endereco,
            bairros_atuantes: bairros_atuantes,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            responsavel: responsavel
        })
        const salvarBiblioteca = await biblioteca.save();
        resposta.status(201).json({
            biblioteca: salvarBiblioteca
        })

    }catch(error){
        resposta.status(400).json({
            message: error.message
        })
    }
}

const buscarBibliotecas = async(require, response) => {
    const {nome} = require.query;

    let query = { };

    if (nome) query.nome = new RegExp(nome, 'i');

    try {
        const biblioteca = await bibliotecaSchema.find(query);
        response.status(200).json(biblioteca)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const buscarBibliotecasPorID = async(require, response) => {
    const { _id } = require.params

    try {
    const bibliotecas = await bibliotecaSchema.find(params)

     const bibliotecaEncontrada = bibliotecas.find(bibliotecaAtual => {
        return bibliotecaAtual.id == id
    })
    
        response.status(200).send(bibliotecaEncontrada)
    } catch (error) {
        
    }

}




module.exports = {
    criarBiblioteca,
    buscarBibliotecas,
    buscarBibliotecasPorID
}