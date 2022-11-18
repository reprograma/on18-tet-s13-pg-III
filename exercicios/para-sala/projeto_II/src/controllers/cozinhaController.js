const mongoose = require("mongoose");
const { response } = require("../app");

const CozinhaSchema = require("../models/CozinhaSchema");

const buscarCozinha = async(req, res) => {
    /*try {
        const filtrarCozinhas = 
    } catch (error) {
        
    } */
}


const buscarCozinhaPorId = async(req, res) => {
    try {
       const { id } = req.params

       let encontrarCozinha = await CozinhaSchema.findById(id)
       
       if(encontrarCozinha == undefined) throw new Error("id não encontrado")
       
       res.status(200).send(encontrarCozinha)

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


const cadastrarCozinha = async (req, res) => {
    try {

        const { nome, cnpj, telefone, iniciativa_privada, 
            endereco, bairros_atuantes, site, atividades_disponiveis, pessoa_responsavel } = req.body
            
            const buscarCnpj = await CozinhaSchema.find({ cnpj })
            //console.log("Esse aqui é buscar", buscarCnpj)
           
            let checarCnpj = buscarCnpj.find((cozinha) => cozinha.cnpj == cnpj)
            //console.log("Esse aqui é checar", checarCnpj) 

            if(checarCnpj){
                return res.status(409).json({
                    mensagem: "Esse Cnpj já existe"
                })
            } 
            
            let buscarBairro = await CozinhaSchema.find({ endereco })

            let bairroExiste = buscarBairro.filter((cozinha) => cozinha.endereco.bairro == endereco.bairro) // true or false

            let existeNomeCozinha = bairroExiste.find((cozinha) => cozinha.nome == nome)

            if(existeNomeCozinha){
                return res.status(409).json({
                    mensagem: "Já existe uma cozinha com esse nome neste bairro"
                })
            }

        const cozinha = new CozinhaSchema({
            nome: nome, 
            cnpj: cnpj, 
            telefone: telefone, 
            iniciativa_privada: iniciativa_privada, 
            endereco: endereco, 
            bairros_atuantes: bairros_atuantes, 
            site: site, 
            atividades_disponiveis: atividades_disponiveis, 
            pessoa_responsavel: pessoa_responsavel
        })

        const salvarCozinha = await cozinha.save();
        res.status(201).json({
            "mensagem": "Cozinha cadastrada com sucesso!",
            cozinha: salvarCozinha
        })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}


const deletarCozinha = async(req, res) => {
    try {
        const { id } = req.params

        const cozinha = await CozinhaSchema.findById(id)

        const deletarCozinha = await cozinha.delete()

        res.status(200).json({
            "mensagem": "Cozinha removida do sistema!"
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}


const atualizarCozinha = async(req, res) => {


}


module.exports = {
    buscarCozinha,
    buscarCozinhaPorId,
    cadastrarCozinha,
    deletarCozinha,
    atualizarCozinha
}
