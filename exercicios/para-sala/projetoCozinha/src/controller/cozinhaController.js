const mongoose = require ("mongoose")
const CozinhaSchema = require ("../models/CozinhaSchema")


//colocar as regras de negócio aqui
const criarCozinhaProjeto = async (req, res) => {
try {
    const cozinha = new CozinhaSchema({
        nome: req.body.nome,
        telefone: req.body.telefone, 
        endereco: req.body.endereco, 
        iniciativa: req.body.iniciativa, 
        site: req.body.site
    })
    const bsucarCnpj = await CozinhaSchema.find({cnpj})
    if(buscarCnpj){
        return res.status(400).json({
            mensagem: "cnpj não existe"
        })
    }

    if(buscarCnpj.length !== 0){
        return response.status(400)
    }
    
    if (String(cnpj).length > 14) {
        return response.status(401).json({ Alerta: `Este CNPJ é inválido. Caracter a mais: ${Number(String(cnpj).length) - 14}` });
    } else if (String(cnpj).length < 14) {
        return response.status(401).json({ Alerta: `Este CNPJ é inválido. Caracter a menos: ${14 - Number(String(cnpj).length)}` });
    }

    const buscarBairro = await CozinhaSchema.find({  bairro })

    const verificarBairro = verificarBairro.filter((cozinha)=>cozinha.endereco.bairro === bairro) //true or false
    let nomeExistente= verificarBairro.find((cozinha) => cozinha.nome === nome)

    if(nomeExistente){
        return responde.status(400).json({Prezados : "O nome da cozinha ja existe nbesse bairrro"})
    }

    
} catch (error) {
    res.status(400).json({
        mensagem: error.message
    })

}}

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
    try{
        const { id } = require.params
        const deletarPorID = await CozinhaSchema.deleteOne ({id})

        response.status(200).json({
            message: "Cozinha deletada com sucesso! :)"
        })
    }catch(error){
        response.status(401).json({
            messagem: error.message
        })
    }

}
module.exports = {
    buscarCozinha,
    idCozinha,
    criacaoCozinha,
    deletarCozinha,
    cadastroAtualizado,
    criarCozinhaProjeto
}