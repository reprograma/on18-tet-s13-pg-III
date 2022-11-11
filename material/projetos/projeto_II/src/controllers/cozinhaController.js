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
    const {id} = req.params

    try {
        const cozinhaEncontrada = await CozinhaSchema.find(id)
        if (cozinhaEncontrada == undefined){
            return res.status(404).send({message: "Cozinha nao encontrada"})
        }
        res.status(200).send(cozinhaEncontrada)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const cadastrarCozinha = async(req,res)=>{
    const { nome, cnpj, iniciativa, endereco, bairrosQueAtuam, site, atividadesDisponiveis, pessoaResponsavel } = req.body

    try {
        const cozinha = new CozinhaSchema({
            nome: nome,
            cnpj: cnpj,
            iniciativa: iniciativa,
            endereco: endereco,
            bairrosQueAtuam: bairrosQueAtuam,
            site: site,
            atividadesDisponiveis: atividadesDisponiveis,
            pessoaResponsavel: pessoaResponsavel
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
    try {
        const cozinha = await CozinhaSchema.findById(re.params.id)
        
        await cozinha.delete()
        
        res.status(200).send({ message: `A cozinha foi deletada com sucesso!` })
    }catch (error) {
        res.status(500).send({message: error.message})
    }
}

const alterarCozinha = async(req, res)=>{
    try {
        const procurarCozinha = await CozinhaSchema.findById(req.params.id)
    } catch (error) {
        
    }
}

module.exports = {
    buscarCozinhas,
    buscarCozinhaPorId,
    cadastrarCozinha,
    deletarCozinha,
    alterarCozinha
}