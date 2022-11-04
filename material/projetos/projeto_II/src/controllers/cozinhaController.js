const mongoose = require("mongoose")

const CozinhaSchema = require("../models/CozinhaSchema")

const buscarCozinhas = async(req,res)=>{
    const {nome} =req.query
}

const buscarCozinhaPorId = async(req, res)=>{
    
}

const cadastrarCozinha = async(req,res)=>{

}

const deletarCozinha = async(req,res)=>{

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