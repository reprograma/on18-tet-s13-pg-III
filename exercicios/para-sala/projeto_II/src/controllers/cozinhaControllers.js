const mongoose = require('mongoose');

const CozinhaSchema = require("../models/CozinhaSchema");

const criarCozinha = async(req, res) =>{
    const { nome, cnpj, iniciativa_privada, endereco, bairros_atuacao, site, 
        atividades_disponiveis, responsavel_cozinha, } = req.body;

try{
    const cozinha = new CozinhaSchema({
        nome: nome,
        cnpj: cnpj,
        iniciativa_privada: iniciativa_privada,
        endereco: endereco,
        bairros_atuacao: bairros_atuacao,
        site: site,
        atividades_disponiveis: atividades_disponiveis,
        responsavel_cozinha: responsavel_cozinha    
    })
            

    const salvarCozinha = await cozinha.save();

    res.status(201).json({  
            message: "Cozinha cadastrada com sucesso!",
            cozinha: criarCozinha
    })

}catch(error){
    res.status(400).json({
        message: error.message
    })
  }
}


module.exports ={
    criarCozinha,
    
}