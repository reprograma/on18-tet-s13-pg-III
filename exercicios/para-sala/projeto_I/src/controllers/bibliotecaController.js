const mongoose = require('mongoose');

const bibliotecaSchema = require("../models/BibliotecaModel");

const criarBiblioteca = async(requisicao, resposta) => {
    const {nome, cnpj, telefone, iniciativa_privada, endereco, plano_saude, plano_saude_numero} = requisicao.body;
    try{
        const biblioteca = new pacienteSchema({
            nome: nome,
            telefone: telefone,
            endereco: endereco,
            plano_saude: plano_saude,
            plano_saude_numero: plano_saude_numero
        })
        const salvarPaciente = await paciente.save();
        resposta.status(201).json({
            paciente: salvarPaciente
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
        const paciente = await pacienteSchema.find(query);
        response.status(200).json(paciente)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}



module.exports = {
    criarBiblioteca,
    buscarBibliotecas
}