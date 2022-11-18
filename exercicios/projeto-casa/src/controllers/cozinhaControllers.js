const mongoose = require ("mongoose");
const Schema = require("../models/schema");

const cadastrarRestaurante = async(req,res)=>{
    const {nome, cnpj, iniciativaPrivada, endereco, bairros_atuando, site, atividades, responsavel} = req.body
    console.log(req.body)
    try{
        const cozinha = new Schema({
            nome: nome,
            cnpj: cnpj,
            iniciativaPrivada: iniciativaPrivada,
            endereco: endereco,
            bairros_atuando: bairros_atuando,
            site: site,
            atividades: atividades,
            responsavel: responsavel
        })

        const salvarRestaurante = await cozinha.save();

        res.status(201).json({
            mensagem: "restaurante criado",
            "Dados do restaurante": salvarRestaurante
        })
    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const showRestaurantes = async(req,res)=>{
    const {id} = req.query;

    let query = {};

    if (id) query.id = new RegExp(id,"i");

    try{
        const restaurantes = await Schema.find(query);
        res.status(200).json(restaurantes)

    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const deleteRestaurante = async(req,res)=>{
    try{

    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const alterarCadastro = async(req,res)=>{
    try{

    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
}


module.exports = {
    showRestaurantes,
    cadastrarRestaurante,
    deleteRestaurante,
    alterarCadastro
}