const mongoose = require('mongoose');

const BibliotecaSchema = require('../models/BibliotecaSchema');
const { json } = require('express');

const criarBibliotecas = async(req, res) => {
    const {nome, cnpj, telefone, iniciativa_privada, endereco, bairros_que_atuam,site, atividades_disponiveis, pessoa_responsavel_pela_biblioteca } = req.body;

    try {
        const biblioteca = new BibliotecaSchema ({
            nome: nome,
            cnpj: cnpj,
            telefone: telefone,
            iniciativa_privada: iniciativa_privada ,
            endereco: endereco,
            bairros_que_atuam: bairros_que_atuam,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            pessoa_responsavel_pela_biblioteca: pessoa_responsavel_pela_biblioteca

        })
    
        const salvarBiblioteca = await biblioteca.save();
        resposta.status(201).json({
            biblioteca: salvarBiblioteca
        })

 } catch (error) {
    resposta.status(400).json({
    mensagem: error.mensagem
    })
 }
}


const buscarBibliotecas = async (req, res) =>{
const { nome } = req.query;

let query = { };

if (nome) query.nome = new RegExp(nome, 'i');

try {
    const biblioteca = await BibliotecaSchema.find(query)
    res.status(200).json(biblioteca)
} catch (error) {
    res.status(500).json({
        mensagem: error.mensagem
    })
}
}

module.exports = {
    criarBibliotecas,
    buscarBibliotecas
}