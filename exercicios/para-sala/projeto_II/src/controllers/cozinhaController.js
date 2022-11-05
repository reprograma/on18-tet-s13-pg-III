const mongoose = require('mongoose')
const cozinhaSchema = require('../models/CozinhaModel')

const cadastrarCozinha = async(req,res)=>{
    const { nome, cnpj, iniciativa_privada, endereco, bairros_atuantes,
        site, atividades_disponiveis, pessoa_responsavel } = req.body
          try {
            const cozinha = new cozinhaSchema({
                nome: nome,
                cnpj: cnpj,
                iniciativa_privada: iniciativa_privada,
                endereco: endereco,
                bairros_atuantes: bairros_atuantes,
                site: site,
                atividades_disponiveis: atividades_disponiveis,
                pessoa_responsavel: pessoa_responsavel
            })
            const salvarCozinha = await cozinha.save()
            res.status(201).json({
                cozinha: salvarCozinha
            })
          } catch (error) {
            res.status(400).json({
                message: error.message
            })
          }
        }

const exibeCozinhas = async (req,res)=>{
  let query = {}
  try {
    const cozinhas = await cozinhaSchema.find(query)
    res.status(200).json(cozinhas)
  } catch (error) {
    res.status(500).json({
      mensagem: error.message
    })
  }
}

const buscarCozinhaPorId = async (req,res)=>{
  try {
    const cozinhas = await cozinhaSchema.findById(req.params.id)
    res.status(200).json(cozinhas)
  } catch (error) {
    res.status(500).json({
      mensagem: error.message
    })
  }
}

module.exports = {
    cadastrarCozinha,
    exibeCozinhas,
    buscarCozinhaPorId
}