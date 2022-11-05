const mongoose = require("mongoose");

const BibliotecaSchema = require("../models/BibliotecaSchema");

const criarBiblioteca = async (req, res) => {
    const {
        nome,
        cnpj,
        telefone,
        iniciativa_privada,
        endereco,
        bairros, 
        site, 
        atividades_disponiveis, 
        responsavel
    } = req.body
    
    try {
        const biblioteca = new BibliotecaSchema({
            nome:nome,
            cnpj: cnpj,
            telefone: telefone,
            iniciativa_privada: iniciativa_privada,
            endereco: endereco,
            bairros: bairros,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            responsavel: responsavel        
        })

        const salvarBiblioteca = await biblioteca.save();

        res.status(201).json({
            biblioteca: salvarBiblioteca
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

module.exports = {
    criarBiblioteca
}

