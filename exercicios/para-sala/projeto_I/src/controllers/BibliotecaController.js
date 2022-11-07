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

const buscarBiblioteca = async(req, res)=> {
    try {
        const biblioteca = await bibliotecaSchema.find()
                
         res.status(200).send(biblioteca)
         console.log(biblioteca)
    } catch (error) {
        res.status(400).json({
            mensagem: "biblioteca não encontrada",
    })
}
}

const buscaBibliotecaPorId = async(req, res)=>{
    try {
        
        const bibliotecaEncontrada = await bibliotecaSchema.findById(req.params.id)
         
          if (bibliotecaEncontrada == undefined){
            return res.status(404).send({menssage: "Biblioteca não encontrada"})
        }

        res.status(200).send(bibliotecaEncontrada)
                     
    } catch (error) {
        res.status(500).send({message:"erro"})        
    }

}

const deletarBibliotecaPorId = async(req, res)=>{
    try {
        
        const bibliotecaEncontrada = await bibliotecaSchema.findById(req.params.id)
                  
          if (bibliotecaEncontrada == undefined){
            return res.status(404).send({menssage: "Biblioteca não encontrada"})
        }
       
        await bibliotecaEncontrada.delete()
        res.status(200).json({mensagem: `Paciente removida do sistema.`})
                     
    } catch (error) {
        res.status(400).json({message:"erro"})        
    }

}

const atualizarBiblioteca = async(req, res)=>{
    try {
        let bibliotecas = await bibliotecaSchema.findById(req.params.id)
        let novoNome = req.body.nome
        let bibliotecaEncontrada = bibliotecas.findById(biblioteca =>biblioteca.id == id)
        bibliotecaEncontrada.nome = novoNome
        res.status(200).json({
            "mensagem": "Nome atualizado com sucesso"
        })

    } catch (error) {
        res.status(400).json({message:"erro"}) 
    }
}


module.exports = {
    criarBiblioteca,
    buscarBiblioteca,
    buscaBibliotecaPorId,
    deletarBibliotecaPorId,
    atualizarBiblioteca 

     
} 