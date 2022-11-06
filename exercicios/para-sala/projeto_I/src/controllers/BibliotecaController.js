const bibliotecaSchema = require("../models/BibliotecaModel")

const criarBiblioteca = async(req, res) =>{
    try {
        const biblioteca = new bibliotecaSchema({
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            telefone: req.body.telefone,
            isIniciativaPrivada: req.body.isIniciativaPrivada,
            endereco: req.body.endereco,
            bairros: req.body.bairros,
            site: req.body.site,
            atividades_disponiveis: req.body.atividades_disponiveis,
            pessoa_responsavel: req.body.pessoa_responsavel

        })
        console.log(biblioteca)

        const salvarBibliotecas = await biblioteca.save()
         res.status(201).json({
            biblioteca: salvarBibliotecas
         })
         

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        
    })
}
}


module.exports = {
    criarBiblioteca
}