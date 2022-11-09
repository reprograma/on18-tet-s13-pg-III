const mongoose = require("mongoose")

const CozinhaSchema = require("../models/CozinhaSchema")

const buscarCozinhas = async(req,res)=>{
    const {nome} =req.query

    let query = { }

    if (nome) query.nome = new RegExp(nome, i)

    try {
        const cozinhas = await CozinhaSchema.find(query)
        res.status(200).json(cozinhas)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const buscarCozinhaPorId = async(req, res)=>{
    
}

const cadastrarCozinha = async(req,res)=>{
    const { nome, cnpj, iniciativa, endereco, bairros_que_atuam, site, atividades_disponiveis, pessoa_responsavel } = req.body

    try {
        const cozinha = new CozinhaSchema({
            nome: nome,
            cnpj: cnpj,
            iniciativa: iniciativa,
            endereco: endereco,
            bairros_que_atuam: bairros_que_atuam,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            pessoa_responsavel: pessoa_responsavel
        })

        const adicionarCozinha = await cozinha.save()
        res.status(201).json({
            message: "Cozinha cadastrada com sucesso!",
            cozinha: adicionarCozinha
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const deletarCozinha = async(req,res)=>{
    const { id } = req.params

    try {
        const cozinhaEncontrada = await CozinhaSchema.deleteOne({ id })
        if (cozinhaEncontrada.deletedCount === 1) {
            return response.status(200).send({ message: `A cozinha foi deletada com sucesso!` })
        } else {
            return response.status(404).send({ message: "A cozinha não foi encontrada." })

        }
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const alterarCozinha = async(req, res)=>{

}

module.exports = {
    buscarCozinhas,
    buscarCozinhaPorId,
    cadastrarCozinha,
    deletarCozinha,
    alterarCozinha
}