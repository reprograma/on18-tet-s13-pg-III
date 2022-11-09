const { default: mongoose } = require("mongoose")
const bibliotecaSchema = require("../models/bibliotecaModels")

const criarBiblioteca = async (req, res) => {
    
    
    
    try {
        const biblioteca = new bibliotecaSchema({
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            telefone: req.body.telefone,
            iniciativa_privada: req.body.iniciativa_privada,
            endereco:req.body.endereco,
            bairros_atuantes: req.body.bairros_atuantes,
            site: req.body.site,
            atividades_disponiveis: req.body.atividades_disponiveis,
            pessoa_responsavel: req.body.pessoa_responsavel
        })

        const salvarBiblioteca = await biblioteca.save()
        res.status(201).json({
           // message: `Biblioteca cadastrada com sucesso`,
            biblioteca: salvarBiblioteca
        })


    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}




module.exports = {
    criarBiblioteca
}
    
