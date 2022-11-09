const { response } = require('express')
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
            const cozinhaTodas = await cozinhaSchema.find()
            for (const contador in cozinhaTodas){
              if (cozinhaTodas[contador].cnpj == cozinha.cnpj) {
                return res.status(400).json({mensagem: "CNPJ já cadastrado"})
              }
            }
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

const deletarCozinha = async (req,res)=>{
  try {
    const cozinha = await cozinhaSchema.findById(req.params.id)
    await cozinha.delete()
    res.status(200).json({
      mensagem: "cozinha deletada"})
  } catch (error) {
    res.status(400).json({
      mensagem: error.message
    })
  }
}

const atualizarCozinha = async (req,res)=>{
  const cozinha = await cozinhaSchema.findById(req.params.id)
  if (!cozinha){
    return res.status(404).send({
      mensagem: `Não foi encontrada nenhuma cozinha com o id ${req.params.id}`
    })
  }
  const { nome, cnpj, iniciativa_privada, endereco, bairros_atuantes,
    site, atividades_disponiveis, pessoa_responsavel } = req.body

    if(typeof nome !="string"||nome.trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Nome' é obrigatório para cadastro"
      })
    }
    
    if(typeof cnpj !="number"){
      return res.status(400).send({
        mensagem: "O campo 'CNPJ' precisa ser um número"
      })
    }
    const cozinhaTodas = await cozinhaSchema.find()
    for (const contador in cozinhaTodas){
      if (cozinhaTodas[contador].cnpj == cnpj) {
        return res.status(400).json({mensagem: "CNPJ já cadastrado"})
      }
    }
    if(typeof iniciativa_privada !="boolean"){
      return res.status(400).send({
        mensagem: "O campo 'Iniciativa Privada?' precisa ser True ou False"
      })
    }
    if(typeof bairros_atuantes[0]!="string"||bairros_atuantes[0].trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Bairros Atuantes' é obrigatório para cadastro"
      })
    }
    
    if(typeof endereco.cep !="string"||endereco.cep.trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Endereço (CEP)' é obrigatório para cadastro"
      })
    }

    if(typeof endereco.rua !="string"||endereco.rua.trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Endereço (Rua)' é obrigatório para cadastro"
      })
    }

    if(typeof endereco.numero !="string"||endereco.numero.trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Endereço(número)' é obrigatório para cadastro"
      })
    }

    if(typeof endereco.estado !="string"||endereco.estado.trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Endereço(Estado)' é obrigatório para cadastro"
      })
    }

    if(typeof endereco.cidade !="string"||endereco.cidade.trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Endereço(número)' é obrigatório para cadastro"
      })
    }
    
    if(typeof endereco.bairro !="string"||endereco.bairro.trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Endereço(Bairro)' é obrigatório para cadastro"
      })
    }

    if(typeof atividades_disponiveis[0] !="string"||atividades_disponiveis[0].trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Atividades Disponíveis' é obrigatório para cadastro"
      })
    }
    if(typeof pessoa_responsavel !="string"||pessoa_responsavel.trim()==""){
      return res.status(400).send({
        mensagem: "O campo 'Pessoa Responsável' é obrigatório para cadastro"
      })
    }
    if (nome) cozinha.nome = nome
    if (cnpj) cozinha.cnpj = cnpj
    if (iniciativa_privada) cozinha.iniciativa_privada = iniciativa_privada
    if (endereco.cep) cozinha.endereco.cep = endereco.cep
    if (endereco.rua) cozinha.endereco.rua = endereco.rua
    if (endereco.numero) cozinha.endereco.numero = endereco.numero
    if (endereco.complemento) cozinha.endereco.complemento = endereco.complemento
    if (endereco.referencia) cozinha.endereco.referencia = endereco.referencia
    if (endereco.estado) cozinha.endereco.estado = endereco.estado
    if (endereco.cidade) cozinha.endereco.cidade = endereco.cidade
    if (endereco.bairro) cozinha.endereco.bairro = endereco.bairro
    if (bairros_atuantes[0]) cozinha.bairros_atuantes[0] = bairros_atuantes[0]
    if (site) cozinha.site = site
    if (atividades_disponiveis[0]) cozinha.atividades_disponiveis[0] = atividades_disponiveis[0]
    if (pessoa_responsavel) cozinha.pessoa_responsavel = pessoa_responsavel
    
    const salvarCozinha = await cozinha.save()
    res.status(200).json({cozinha: salvarCozinha})
}

module.exports = {
    cadastrarCozinha,
    exibeCozinhas,
    buscarCozinhaPorId,
    deletarCozinha,
    atualizarCozinha
}