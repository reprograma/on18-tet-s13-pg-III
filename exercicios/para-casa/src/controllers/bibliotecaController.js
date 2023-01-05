const mongoose = require('mongoose');

const bibliotecaSchema = require("../models/BibliotecaModel");

const criarBiblioteca = async(requisicao, resposta) => {
    const {nome, cnpj, telefone, iniciativa_privada, endereco, bairros_atuantes,site,atividades_disponiveis, responsavel} = requisicao.body;
    try{
        const biblioteca = new bibliotecaSchema({
            nome: nome,
            cnpj: cnpj,
            telefone: telefone,
            iniciativa_privada: iniciativa_privada,
            endereco: endereco,
            bairros_atuantes: bairros_atuantes,
            site:site,
            atividades_disponiveis: atividades_disponiveis,
            responsavel:responsavel
        })

        const salvarBiblioteca = await biblioteca.save();
        resposta.status(201).json({
            biblioteca: salvarBiblioteca
        })

    }catch(error){
        resposta.status(400).json({
            message: error.message
        })
    }
}

const buscarBibliotecas = async(require, response) => {
    const {nome} = require.query;

    let query = { };

    if (nome) query.nome = new RegExp(nome, 'i');

    try {
        const biblioteca = await bibliotecaSchema.find(query);
        response.status(200).json(biblioteca)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const obterBibliotecaPorId = async (request, response) => {
    const { id } = request.params
    try {
        if(id.length > 24 || id.length > 24) {
            response.status(404).json({
                message:`Número de ID incorreto, por favor, digite novamente!`
            })
        }

        const biblioteca = await bibliotecaSchema.find({ id })
        if (biblioteca.length == 0){
            response.status(200).json({message:`Biblioteca não encontrada`})
        }
        response.status(200).json({biblioteca});

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const atualizarBiblioteca = async (request, response) => {
    const { id } = request.params

    const {nome, cnpj, telefone, iniciativa_privada, endereco:{cep, rua, numero, complemento, referencia, estado, cidade, bairro },
    bairros_atuantes,site,atividades_disponiveis, responsavel} = request.body;

    try{
        if(id.length > 24 || id.length > 24) {
            response.status(404).json({
                message:`Número de ID incorreto, por favor, digite novamente!`
            })
        }

        if (String(cnpj).length > 14 || String(cnpj).length < 14){
            response.status(404).json({
                message:`cnpj inválido, digite novamente.`
            })
        }

        const bibliotecaEncontrada = await bibliotecaSchema.updateOne({ 
            nome, cnpj,telefone, iniciativa_privada, 
            endereco: {cep, rua,numero, complemento, referencia, estado, cidade, bairro},
            bairros_atuantes, site, atividades_disponiveis, responsavel
        })
        const bibliotecaAtualizado = await bibliotecaSchema.find({ id })
            if(bibliotecaAtualizado.length == 0 ) {
                response.status(404).json({
                    message:`Biblioteca não encontrada!`
                })
            }

        response.status(200).json(bibliotecaAtualizado)

   } catch (error){
        response.status(400).json({
            message: error.message
      })
   }
}

const deletarBiblioteca = async(req, res) =>{
    try{
        const biblioteca = await bibliotecaSchema.findById(req.params.id)

        await biblioteca.delete();

        res.status(200).json({
            mensagem: `Biblioteca removida do banco de dados.`
        })
    }catch(error){
        res.status(400).json({
            mensagem: error.message
        })
    }
}


module.exports = {
    criarBiblioteca,
    buscarBibliotecas,
    obterBibliotecaPorId,
    atualizarBiblioteca,
    deletarBiblioteca
}