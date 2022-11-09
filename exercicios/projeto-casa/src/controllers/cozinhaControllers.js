const mongoose = require ("mongoose");
const {response} = require("../app")

const restauranteSchema = require("../models/schema")

const showRestaurantes = async(req,res)=>{
    try{
        res.status(200).json({
            teste: "testando"
        })
    }catch(error){
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const cadastrarRestaurante = async(req,res)=>{
    try{

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