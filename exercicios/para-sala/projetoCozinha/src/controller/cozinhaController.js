const mongoose = require ("mongoose")
const CozinhaSchema = require ("../models/CozinhaSchema")

try {
    const cozinha = new CozinhaSchema({
        nome: req.body.nome,
        telefone: req.body.telefone, 
        endereco: req.body.endereco, 
        iniciativa: req.body.iniciativa, 
        site: req.body.site
    })

    const salvarCozinhas = await cozinha.save();
    res.status(201).json({
        cozinha: salvarCozinhas
    })
} catch (error) {
    res.status(400).json({
        mensagem: error.message
    })

}

//construir um  novo Schema

// GET "/cozinha" Deverá retornar todas as cozinhas cadastradas.

// GET "/cozinha/[id] Deverá retornar a cozinha com o id informado.

// POST "/cozinha" Deverá criar uma "cozinha"

// DELETE "/cozinha/[ID]" Deverá deletar uma cozinha por id específico e retorna mensagem;

// PATCH "/cozinha/[ID]" Deverá alterar informação específica por id específico e retorna o cadastro atualizado;
const buscarCozinha = async(require,response) =>{
    try {
        const retonarCozinha = await CozinhaSchema.find()
        return response.status(200).json(retonarCozinha)
    }catch (error){
        return response.status(500).json({message: error.message})
    }
}

const idCozinha = async(require, response) =>{
    try {
        const retonarID = await CozinhaSchema.find()
        response.status(202).json(retonarID)
    }catch(error){
        responde.status(404).json ({
        message:error.message})
    }
}
const criacaoCozinha = async(require, response) =>{

}

const cadastroAtualizado = async(require, response) =>{

}
const deletarCozinha = async(require, response) =>{

}
module.exports = {
    buscarCozinha,
    idCozinha,
    criacaoCozinha,
    deletarCozinha,
    cadastroAtualizado,
}