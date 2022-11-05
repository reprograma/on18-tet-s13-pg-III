const mongoose = require("mongoose");
const CozinhaSchema = require("../models/CozinhaSchema");
const cozinhaUtils = require("../utils/servicoCozinha");

const criarCozinha = async (request, response) => {
    const { nome, cnpj, iniciativa_privada,
        endereco: { cep, rua, numero, complemento, referencia, estado, cidade, bairro },
        bairros_atuantes, site, atividades_disponiveis, pessoa_responsavel } = request.body;

    const buscaCnpj = await CozinhaSchema.find({ cnpj })
    if (buscaCnpj.length !== 0) {//array zerado ou array encontrado
        return response.status(400).json({ message: `Não é possível cadastrar, esse número de cnpj já existe` });
    }
    try {
        const cozinha = new CozinhaSchema({
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
module.exports = {
    criarCozinha
}