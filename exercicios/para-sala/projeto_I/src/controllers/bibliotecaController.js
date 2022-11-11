const mongoose = require('mongoose');

const BibliotecaSchema = require('../models/BibliotecaSchema');
const { json } = require('express');

const buscarBibliotecas = async (req, res) =>{
const { nome } = req.query;

let query = { };

if (nome) query.nome = new RegExp(nome, 'i');

try {
    const biblioteca = await BibliotecaSchema.find(query)
    res.status(200).json(biblioteca)
} catch (error) {
    res.status(500).json({
        mensagem: error.mensagem
    })
}
}

const buscarBibliotecaId = async (req, res) => {
    try { 
        const biblioteca = await BibliotecaSchema.findById(req.params.id)
        res.status(200).json(biblioteca)
        
    } catch (error) {
        res.status(500).json({
            mensagem: error.message
        })
    }
}

const criarBibliotecas = async(req, res) => {
    const {nome, cnpj, telefone, iniciativa_privada, endereco, bairros_que_atuam,site, atividades_disponiveis, pessoa_responsavel_pela_biblioteca } = req.body;

    }
    try {
        const biblioteca = new BibliotecaSchema ({
            nome:nome,
            cnpj: cnpj,
            telefone: telefone,
            iniciativa_privada: iniciativa_privada ,
            endereco: endereco,
            bairros_que_atuam: bairros_que_atuam,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            pessoa_responsavel_pela_biblioteca: pessoa_responsavel_pela_biblioteca

        })
    
        const salvarBiblioteca = await biblioteca.save();
        resposta.status(200).json({
            biblioteca: salvarBiblioteca
        })

 } catch (error) {
    resposta.status(500).json({
    mensagem: error.mensagem
    })
 }



const deletarBiblioteca = async (req, res) => {
    try {
        const biblioteca = await BibliotecaSchema.findById(req.params.id)

        await biblioteca.delete()

        res.status(200).json ({
            mensagem:' Biblioteca deletada com sucesso'
                })

    }catch (error) {
        
    }
}

const atualizarBiblioteca = async (req, res) => {
   try {
   
    const {nome, cnpj, telefone, endereco, site}= req.body;

    const procurarBiblioteca = await BibliotecaSchema.findById(req.params.id)

    procurarBiblioteca.nome = nome || procurarBiblioteca.nome
    procurarBiblioteca.cnpj = cnpj || procurarBiblioteca.cnpj;
    procurarBiblioteca.telefone = telefone || procurarBiblioteca.telefone;
    procurarBiblioteca.endereco = endereco || procurarBiblioteca.endereco;
    procurarBiblioteca.site = site || buscaBibliotecaId.site;
    

    const bibliotecaAtualizada = procurarBiblioteca.save()
    res.status(200).json (bibliotecaAtualizada)
       
   }catch (error) {
    res.status(400).json({
        mensagem: error.message

    })
    
   }
}

module.exports = {
    buscarBibliotecas,
    buscarBibliotecaId,
    criarBibliotecas,
    deletarBiblioteca,
    atualizarBiblioteca
}