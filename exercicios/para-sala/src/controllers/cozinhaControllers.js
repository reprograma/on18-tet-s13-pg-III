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
        cozinha: salvarCozinha
    })

} catch (error) {
    res.status(400).json({
        message: error.message
    })

}
}

const buscarTodasCozinhas = async (req, res) => {
    try {
        const cozinha = await CozinhaSchema.find()

        if (cozinha.length > 1) {
            return res.status(200).json({ message: `Encontramos ${cozinha.length} cozinhas.`, cozinha })
        } else if (cozinha.length == 1) {
            return res.status(200).json({ message: `Encontramos ${cozinha.length} cozinha.`, cozinha })
        } else {
            return res.status(404).json({ message: `Não encontramos nenhuma cozinha até o momento.` })
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


const buscarCozinhaId = async (req, res) => {
    const { id } = request.params
    try {
        if (id.length < 24 || id.length > 24) {
            return res.status(404).json({
                message: "Id incorreto"
            })
        }
        const cozinha = await CozinhaSchema.find({ id })
        if (cozinha.length == 0) {
            return res.status(200).json({ message: `Cozinha não encontrada.` })
        }
        res.status(200).json(cozinha)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletarCozinha = async (req, res) => {
    const { id } = request.params
    try {
        if (id.length < 24 || id.length > 24) {
            return res.status(404).json({ message: ` Id incorreto` })
        }
        const cozinhaEncontrada = await CozinhaSchema.deleteOne({ id })
        if (cozinhaEncontrada.deletedCount === 1) {
            return res.status(200).send({ message: `Cozinha deletada com sucesso!` })
        } else {
            return res.status(404).send({ message: "A cozinha não foi encontrada." })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports ={
    criarCozinha,
    buscarCozinhaId,    
    deletarCozinha,
    buscarTodasCozinhas
}