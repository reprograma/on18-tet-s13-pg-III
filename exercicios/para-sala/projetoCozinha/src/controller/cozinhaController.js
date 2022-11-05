const mogoose = require ("mongoose")

const CozinhaSchema = require ("../models/CozinhaSchema")

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

}
const criacaoCozinha = async(require, response) =>{

}
const deletarCozinha = async(require, response) =>{

}
const cadastroAtualizado = async(require, response) =>{

}

module.exports = {
    buscarCozinha,
    idCozinha,
    criacaoCozinha,
    deletarCozinha,
    cadastroAtualizado,
}