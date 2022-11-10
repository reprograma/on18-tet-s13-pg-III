const mongoose = require("mongoose")

const CozinhaSchema = require("../models/CozinhaSchema");

const { query } = require("express");

const todasAsCozinhas = async (req, res) => {
    try{
        const cozinha = await CozinhaSchema.find({query});

        res.status(200).json(cozinha)
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

const cozinhaPorId = async (req, res) => {
    try{
        const cozinha = await CozinhaSchema.findById(req.params.id)
        res.status(200).json(cozinha);
    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

const cadastrarCozinha = async (req, res) => {
    // const { nome, cnpj, endereco, site, iniciativa_privada, bairros_que_atuam, atividades_disponiveis, pessoa_responsavel_pela_cozinha } = req.body
    try{
        const cozinha = new CozinhaSchema({
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            endereco: req.body.endereco,
            site: req.body.site,
            iniciativa_privada: req.body.iniciativa_privada,
            bairros_que_atuam: req.body.bairros_que_atuam,
            atividades_disponiveis: req.body.atividades_disponiveis,
            pessoa_responsavel_pela_cozinha: req.body.pessoa_responsavel_pela_cozinha
        })

        const salvarCozinha = await cozinha.save();
        res.status(201).json({
            cozinha: salvarCozinha
        })
        
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

const atualizarCadastroPorId = async (req, res) => {
    try{
        const { nome, endereco, bairros_que_atuam } = req.body;
        const procurarCozinha = await CozinhaSchema.findById(req.params.id)

        procurarCozinha.nome = nome || procurarCozinha.nome;
        procurarCozinha.endereco = endereco || procurarCozinha.endereco;
        procurarCozinha.bairros_que_atuam = bairros_que_atuam || procurarCozinha.bairros_que_atuam;

        const cozinhaAtualizada = procurarCozinha.save();
        res.status(200).json(cozinhaAtualizada)

    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

const deletarCadastro = async (req, res) => {
    try{
        const cozinha = await CozinhaSchema.findById(req.params.query)
        
        await cozinha.delete()

        res.status(200).json({
            message: "Cozinha deletada com sucesso!"
        })
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    todasAsCozinhas,
    cozinhaPorId,
    cadastrarCozinha,
    atualizarCadastroPorId,
    deletarCadastro
}