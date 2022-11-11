const mongoose = require("mongoose");

const CozinhaSchema = require("../models/CozinhaSchema");

const buscarCozinha = async(req, res) => {

}

const buscarCozinhaPorId = async(req, res) => {
    try {
       const { id } = req.params

       let encontrarCozinha = await CozinhaSchema.findById(id)
       
       if(encontrarCozinha == undefined) throw new Error("id não encontrado")
       
       res.status(200).send(encontrarCozinha)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


const cadastrarCozinha = async (req, res) => {
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
            "mensagem": "Cozinha cadastrada com sucesso!",
            cozinha: salvarCozinha
        })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}

const deletarCozinha = async(req, res) => {
    try {
        const { id } = req.params

        const cozinha = await CozinhaSchema.findById(id)

        const deletarCozinha = await cozinha.delete()

        res.status(200).json({
            "mensagem": "Cozinha removida do sistema!"
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}

const atualizarCozinha = async(req, res) => {

}

module.exports = {
    buscarCozinha,
    buscarCozinhaPorId,
    cadastrarCozinha,
    deletarCozinha,
    atualizarCozinha
}
