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

// GET "/biblioteca" Deverá retornar todas as bibliotecas cadastradas.
const buscarBiblioteca = async(req,res) =>{
  //tentar como no exemplo....   
    const {nome} = req.query
    let query = {}
    if (nome) query.nome = new RegExp(nome,'i')

    try {
    
        const biblioteca = await bibliotecaSchema.find(query) 
         
          res.status(200).json(biblioteca)         
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
       
    }
} 

//GET "/xxxx/[id] Deverá retornar o valor com o id informado


// DELETE "/biblioteca/[ID]" Deverá deletar uma biblioteca por id específico e retorna mensagem;
const deletarBiblioteca = async(req, res) => {
   
    try {

        const biblioteca = await bibliotecaSchema.findById(req.params.id)
        console.log( `VALOR EXCLUIDO:`,biblioteca)
        await biblioteca.delete()
         

        res.status(200).json({
            message : `Biblioteca removida do Sistema`
        })

    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}


module.exports = {
    criarBiblioteca,
    buscarBiblioteca,
    deletarBiblioteca
}
    
