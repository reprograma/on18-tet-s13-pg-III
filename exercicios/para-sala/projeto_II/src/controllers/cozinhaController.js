const CozinhaSchema = require("../models/CozinhaSchema");
const bcrypt = require("bcrypt");

const criarCozinha = async(req, res) => {

    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword

    const emailExists = await CozinhaSchema.exists({ email: req.body.email})

    if(emailExists) {
        return res.status(409).send({
            message: "Email já cadastrado!"
        })
    }
    try {
        const newUser = new CozinhaSchema(req.body)
        const savedUser = await newUser.save();

        res.status(201).send({
            message: "Criado com sucesso!",
            savedUser
        })

        const {nome, cnpj, telefone, iniciativa_privada, endereço, bairros_atuantes, site,atividades_disponiveis, pessoa_responsavel} = req.body;
        
        const buscarCnpj = await CozinhaSchema.find({ cnpj });

        if(buscarCnpj == cnpj){
            res.status(400).json({
                message: "Cnpj já existe"
            })
        }
        
        if (String(cnpj).length > 14) {
            return res.status(401)
            .json({
                Alerta: `Este CNPJ é inválido. Caracteres a mais: ${Number(String(cnpj).length) - 14}`
            });
        }else if (String(cnpj).length < 14) {
            return res.status(401)
            .json({
                Alerta: `Este CNPJ é inválido. Caracteres a menos: ${14 - Number(String(cnpj).length)}`
            });
        }

        const buscarBairro = await  CozinhaSchema.find({ bairro });

        let checarBairro = buscarBairro.filter((cozinha) => cozinha.endereço.bairro === bairro)
        console.log(checarBairro)
        let nomeExisteBairro = checarBairro.find((cozinha) => cozinha.nome === nome);

        if (nomeExisteBairro) {
            return res.status(400).json({ Prezades: `O nome desta cozinha já existe neste bairro.`});
    }


        const cozinha = new CozinhaSchema({
            nome: nome,
            cnpj: cnpj,
            telefone: telefone,
            iniciativa_privada: iniciativa_privada,
            endereço: endereço,
            bairros_atuantes: bairros_atuantes,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            pessoa_responsavel: pessoa_responsavel
        })

        const salvarCozinha = await cozinha.save();

        res.status(201).json({
            message: `Sua cozinha foi criada!`
        })
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
} 
const buscarTodasCozinhas = async (req, res) => {
    try {
        const buscarCozinha = await CozinhaSchema.find();
        res.status(200).json(buscarCozinha);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletarCozinha = async(req, res) => {
    try {
        const { id } = req.params;

        const deletarPorId = await CozinhaSchema.deleteOne({ id });
        res.status(401).json({
            mensagem: `Cozinha deletada com sucesso!`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = {
    criarCozinha,
    buscarTodasCozinhas,
    deletarCozinha
}