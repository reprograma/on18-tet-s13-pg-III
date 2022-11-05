const mongoose = require("mongoose");

const CozinhaSchema = require("../models/CozinhaSchema");

const criarCozinha = async (req, res) => {
    const { nome, cnpj, telefone, iniciativa_privada, endereco, bairros_atuantes, site, atividades_disponiveis, pessoa_responsavel } = req.body

    try {
        const cozinha = new CozinhaSchema({
            nome: nome, 
            cnpj: cnpj, 
            telefone: telefone, 
            iniciativa_privada: iniciativa_privada, 
            endereco: endereco, 
            bairros_atuantes: bairros_atuantes, 
            site: site, 
            atividades_disponiveis: atividades_disponiveis, 
            pessoa_responsavel: pessoa_responsavel
        })

        const salvarCozinha = await cozinha.save();
        res.status(201).json({
            cozinha: salvarCozinha
        })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}

module.exports = {
    criarCozinha
}
