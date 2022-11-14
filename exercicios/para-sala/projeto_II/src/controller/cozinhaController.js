
const CozinhaSchema = require("../models/CozinhaSchema")


const criarCozinha = async (request, response) => {

    try {

        const { nome, cnpj, iniciativa_privada, endereco, estado, cidade, bairro, bairros_que_atuam, site, atividades_disponiveis, pessoa_responsavel } = request.body

        const cozinha = new CozinhaSchema({
            nome: nome,
            cnpj: cnpj,
            iniciativa_privada: iniciativa_privada,
            endereco: endereco,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            bairros_que_atuam: bairros_que_atuam,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            pessoa_responsavel: pessoa_responsavel
        })

        const salvarCozinha = await cozinha.save()


        response.status(201).send(salvarCozinha)

    } catch (error) {

        response.status(500).json({
            message: error.message
        })

    }


}

const buscarCozinha = async (request, response) => {

    try {
        const cozinhasRequest = request.params

        const cozinhas = await CozinhaSchema.find(cozinhasRequest)

        response.status(200).json(cozinhas)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })

    }

}

module.exports = {
    criarCozinha,
    buscarCozinha
}