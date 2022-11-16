const { response } = require('../app');
const CozinhaSchema = require('../models/CozinhaSchema');
const cozinhaSchema = require('../models/CozinhaSchema');

const criarCozinha = async(req, res) => {
    try{

        const {nome, cnpj, telefone, iniciativa_privada, 
            endereco, bairros_atuantes, site, atividades_disponiveis, pessoa_responsave } = req.body;

        const buscarCnpj = await CozinhaSchema.find({cnpj});
        
        if(buscarCnpj ==cnpj){
            res.status(400).json({
                mensage: "Cnpj já existe"
                
            })
        }
        const buscarBairro = await CozinhaSchema.find({bairro});
        const buscarNome = await CozinhaSchema.find({nome})
    
        if (buscarBairro && buscarNome) {
            return response.status(400).json ({Prezados:`nome desta cozinha já existe neste bairro`});
        }


        const cozinha = new CozinhaSchema({
            nome: nome,
            cnpj: cnpj,
            endereco: endereco,
            bairros_atuantes: bairros_atuantes,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            pessoa_responsavel: pessoa_responsavel
        })

        const salvarCozinha = await CozinhaSchema.save();

        res.status(201).json({
            mensagem:`Sua cozinha foi criada`
        })

    }catch(error){
        res.status(401).json({
            mensagem: error.mensage
        })
    }
}

module.exports = {
    criarCozinha
}