const Biblioteca = require("../models/BibliotecaModel")

const buscarBibliotecas = async(req, res) => {
    try {
        const bibliotecas = await Biblioteca.find({})

        return res.status(200).json({bibliotecas})
    } catch(error) {
        res.status(400).json({
            message: error.message
        })
        console.log(error.message)
    }
}

const buscarBibliotecaPorId = async(req, res) => {
    try {
        const bibliotecas = await Biblioteca.findById(req.params.id)

        return res.status(200).json({bibliotecas})
    } catch(error) {
        message: error.message
    }
}

const criarBiblioteca = async(req, res) => {
    const {
        nome, 
        cnpj,
        telefone,
        iniciativaPrivada,
        endereco,
        cep,
        rua,
        numero,
        complemento,
        referencia,
        estado,
        cidade,
        bairro,
        bairrosQueAtuam,
        site,
        atividadesDisponiveis,
        pessoaResponsavel
    } = req.body;

    try {
        const biblioteca = new Biblioteca({
            nome: nome,
            cnpj: cnpj,
            telefone: telefone,
            iniciativaPrivada: iniciativaPrivada,
            endereco: endereco,
            cep: cep,
            rua: rua,
            numero: numero,
            complemento: complemento,
            referencia: referencia,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            bairrosAtuantes: bairrosQueAtuam,
            site: site,
            atividadesDisponiveis: atividadesDisponiveis,
            pessoaResponsavel: pessoaResponsavel
        })

        const bibliotecaCriada = await biblioteca.save();

        res.status(201).json({
            biblioteca: bibliotecaCriada
        })
    } catch(error) {
        res.status(400).json({
            message: error.message
        })
    }
}


module.exports = {
    buscarBibliotecas,
    buscarBibliotecaPorId,
    criarBiblioteca
}

