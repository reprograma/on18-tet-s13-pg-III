const mongoose = require("mongoose")

const BibliotecaSchema = require("../models/BibliotecaSchema")

const todasBibliotecas = async (requisicao, resposta) => {
    try {
        let listarBibliotecas = await BibliotecaSchema.find()
        resposta.status(200).send(listarBibliotecas)

    } catch (error) {
        resposta.status(500).json({
            messagem: error.message
        })
    }
}

const criarBiblioteca = async (requisicao, resposta) => {

    const biblioteca = await BibliotecaSchema()
    try {
        const biblioteca = new BibliotecaSchema({
            nome: requisicao.body.nome,
            cnpj: requisicao.body.cnpj,
            telefone: requisicao.body.telefone,
            iniciativaPrivada: requisicao.body.iniciativaPrivada,
            endereco: requisicao.body.endereco,
            cep: requisicao.cep,
            rua: requisicao.body.endereco.rua,
            numero: requisicao.body.endereco.numero,
            complemento: requisicao.body.endereco.complemento,
            referencia: requisicao.body.endereco.referencia,
            estado: requisicao.body.endereco.estado,
            cidade: requisicao.body.endereco.cidade,
            bairro: requisicao.body.bairro,
            bairrosAtuantes: requisicao.body.bairrosAtuantes,
            site: requisicao.body.site,
            atividades_disponiveis: requisicao.body.atividadesDisponiveis,
            pessoaResponsavel: requisicao.body.pessoaResponsavel

        })

        //  const cnpjExiste = db.filter(cnpjAtual => cnpjAtual.cnpj === cnpj)
        //  const nomeExiste = db.some(nomeAtual => nomeAtual.nome === nome)
        //  const bairroExiste = db.some(bairroAtual => bairroAtual.bairro === bairro)

        // if(cnpjExiste === true){
        //     return resposta.status(409).send({
        //         messagem: "Já existe uma biblioteca cadastrada com esse CNPJ"})
        // }

        const salvarBiblioteca = await biblioteca.save()

        resposta.status(201).json({
            biblioteca: salvarBiblioteca
        })


    } catch (error) {
        resposta.status(400).json({
            message: error.message
        })
    }
}

const bibliotecaPorId = async (requisicao, resposta) => {
    try {
        const biblioteca = await BibliotecaSchema.findById(requisicao.params.id)
        console.log(biblioteca)
        resposta.status(200).json(biblioteca)

    } catch (error) {
        resposta.status(500).json({
            mensagem: error.message
        })
    }
}

const deletarBiblioteca = async (requisicao, resposta) => {
    try {
        const bibliotecaEncontrada = await BibliotecaSchema.findById(requisicao.params.id)

        if (bibliotecaEncontrada == null) {
            return resposta.status(404).send({
                messagem: "Biblioteca não encontrada"
            })
        }

        await bibliotecaEncontrada.delete()

        // if (bibliotecaEncontrada.length === undefined){
        //     return resposta.status(500).send({
        //         mensagem: "Nenhuma biblioteca encontrada para o ID informado"
        //     })
        // }

        // if (!bibliotecaEncontrada.isValid(bibliotecaEncontrada)) return Error({ status: 422 })

        resposta.status(200).json({
            mensagem: "Biblioteca deletada com sucesso!"
        })

    } catch (error) {
        resposta.status(500).json({
            messagem: error.message
        })
    }
}

const atualizarBiblioteca = async (requisicao, resposta) => {
    try {
        const {nome, cnpj, telefone, iniciativaPrivada, endereco, bairrosAtuantes, site, atividadesDisponiveis, pessoaResponsavel } = requisicao.body

        const novaBiblioteca = await BibliotecaSchema.findByIdAndUpdate(requisicao.params.id, {
            nome, cnpj, telefone, iniciativaPrivada, endereco, bairrosAtuantes, site, atividadesDisponiveis, pessoaResponsavel
        })

        // if (novaBiblioteca == null) {
        //     return resposta.status(404).send({
        //         messagem: "Biblioteca não encontrada"
        //     })
        // }

        resposta.status(200).json({mensagem: "Biblioteca atualizada com sucesso", novaBiblioteca})

    } catch (error) {
        resposta.status(500).json({
            messagem: error.message
        })
    }
}


module.exports = {
    todasBibliotecas,
    criarBiblioteca,
    bibliotecaPorId,
    deletarBiblioteca,
    atualizarBiblioteca
}