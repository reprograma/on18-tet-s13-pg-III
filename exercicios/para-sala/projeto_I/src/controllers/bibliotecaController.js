const mongoose = require("mongoose");

const BibliotecaSchema = require("../models/BibliotecasSchema");

const criarBiblioteca = async(req, res) => {
    const {nome,cnpj,telefone,cep,rua,numero,complemento,referencia,estado,cidade,bairro,site,organização} = req.body;
    
    try {
        const novaBiblioteca = new BibliotecaSchema({
            nome: nome,
            cnpj: cnpj,
            telefone: telefone,
            cep: cep,
            rua: rua,
            numero: numero,
            complemento: complemento,
            referencia: referencia,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            bairros: [
                'santarosa','dinamerica','malvinas','serrotao','alameda','bodocongo','portalsudoeste'
            ],
            site: site,
            organização: Organização

        })
        
        const salvarBiblioteca = await novaBiblioteca.save();
        res.status(200).json({
            novaBiblioteca: salvarBiblioteca

        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const buscarBibliotecas = async (req, res) => {
    try {
        const buscarBiblioteca = await BibliotecaSchema.find(query);
        res.status(200).json(buscarBiblioteca);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const buscarBibliotecasId = async (req, res) => {
    try {
        const buscarBibliotecaPorId = await BibliotecaSchema.findById(req.params.id);
        res.status(200).json(buscarBibliotecaPorId);

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletarBibliotecaId = async(req, res) => {
    try {
        const bibliotecaId = await BibliotecaSchema.findById(req.params.id)

        await bibliotecaId.delete();
        res.status(200).json({
            mensagem: "Biblioteca removida do sistema."
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const atualizarBibliotecaId = async (req, res) => {
    try {
        const { nome,cnpj,telefone,cep,rua,numero,complemento,referencia,estado,cidade,bairro,site,organização } = req.body;

        const buscaBibliotecaId = await BibliotecaSchema.findById(req.params.id);
            
        buscaBibliotecaId.nome = nome || buscaBibliotecaId.nome;
        buscaBibliotecaId.cnpj = cnpj || buscaBibliotecaId.cnpj;
        buscaBibliotecaId.telefone = telefone || buscaBibliotecaId.telefone;
        buscaBibliotecaId.cep = cep || buscaBibliotecaId.cep;
        buscaBibliotecaId.rua = rua || buscaBibliotecaId.rua;
        buscaBibliotecaId.numero = numero || buscaBibliotecaId.numero;
        buscaBibliotecaId.complemento = complemento || buscaBibliotecaId.complemento;
        buscaBibliotecaId.referencia = referencia || buscaBibliotecaId.referencia;
        buscaBibliotecaId.estado = estado || buscaBibliotecaId.estado;
        buscaBibliotecaId.cidade = cidade || buscaBibliotecaId.cidade;
        buscaBibliotecaId.bairro = bairro || buscaBibliotecaId.bairro;
        buscaBibliotecaId.site = site || buscaBibliotecaId.site;
        buscaBibliotecaId.organização = organização || buscaBibliotecaId.organização;
        
            const bibliotecaAtualizada = buscaBibliotecaId.save();
            res.status(200).json(bibliotecaAtualizada)
    
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
module.exports = {
    criarBiblioteca,
    buscarBibliotecas,
    buscarBibliotecasId,
    deletarBibliotecaId,
    atualizarBibliotecaId
}