const mongoose = require("mongoose");
const CozinhaSchema = require("../models/CozinhaSchema");

const buscarTodasCozinhas = async (request, response) => {
    try {
        const cozinha = await CozinhaSchema.find()
        response.status(200).json(cozinha)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const buscarCozinhaId = async (request, response) => {
    const idSolicitado = request.params
    try {
        const cozinha = await CozinhaSchema.find({ id: idSolicitado.id })
        response.status(200).json(cozinha)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const criarCozinha = async (request, response) => {
    const { id, nome, cnpj, iniciativa_privada,
        endereco: { cep, rua, numero, complemento, referencia, estado, cidade, bairro },
        bairros_atuantes, site, atividades_disponiveis, pessoa_responsavel } = request.body;

    //retorna uma array de objetos
    const buscaBairro = await CozinhaSchema.find({ bairro: bairro })
    //filtrei as cozinhas que tem o bairro que a pessoa digitou
    let ExisteBairro = buscaBairro.filter((cozinha) => cozinha.endereco.bairro === bairro)
    //verifiquei se vai encontrar no array do filter UMA cozinha
    let nomeExisteBairro = ExisteBairro.find((cozinha) => cozinha.nome === nome)
    if (nomeExisteBairro) {
        return response.status(404).json({ message: `Não é possível cadastrar a sua cozinha, esse nome já existe neste bairro` });
    }
    const buscaCnpj = await CozinhaSchema.find({ cnpj })
    if (buscaCnpj.length !== 0) {//array zerado ou array encontrado
        return response.status(400).json({ message: `Não é possível cadastrar, esse número de cnpj já existe` });
    }
    try {
        const cozinha = new CozinhaSchema({
            id: id,
            nome: nome,
            cnpj: cnpj,
            iniciativa_privada: iniciativa_privada,
            endereco: {
                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
                referencia: referencia,
                estado: estado,
                cidade: cidade,
                bairro: bairro
            },
            bairros_atuantes: bairros_atuantes,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            pessoa_responsavel: pessoa_responsavel
        })
        const salvarCozinha = await cozinha.save();
        response.status(201).json({
            cozinha: salvarCozinha
        })

    } catch (error) {
        response.status(400).json({
            message: error.message
        })

    }
}

// const deletarCozinha = async (request, response) => {
//     const idSolicitado = request.params
//     try {
//         const cozinhaIndice = await CozinhaSchema.findIndex({ id: idSolicitado.id })
//         if (cozinhaIndice === -1) return res.status(404).send({
//             message: "Cozinha não encontrada."
//         })
//         cozinha.splice(cozinhaIndice, 1)
//         res.status(200).send({ message: "Cozinha deletada com sucesso!" })
//     } catch (error) {
//         response.status(500).json({
//             message: error.message
//         })
//     }
// }


module.exports = {
    buscarTodasCozinhas,
    buscarCozinhaId,
    criarCozinha
    // deletarCozinha
}