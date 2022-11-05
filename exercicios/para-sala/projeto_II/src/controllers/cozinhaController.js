const mongoose = require("mongoose");
const CozinhaSchema = require("../models/CozinhaSchema");

const criarCozinha = async (requisicao, resposta) => {
    const { nome, cnpj, iniciativa_privada,
        endereco: { cep, rua, numero, complemento, referencia, estado, cidade, bairro },
        bairros_atuantes, site, atividades_disponiveis, pessoa_responsavel } = requisicao.body;
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
        resposta.status(201).json({
            cozinha: salvarCozinha
        })

    } catch (error) {
        resposta.status(400).json({
            messagem: error.message
        })

    }

}
module.exports = {
    criarCozinha
}