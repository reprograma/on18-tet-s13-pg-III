const mongoose = require("mongoose");
const CozinhaSchema = require("../models/CozinhaSchema");
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword

    const emailExists = await UserSchema.exists({ email: req.body.email })

    if (emailExists) {
      return res.status(409).send({
        message: 'Email já cadastrado',
      })
    }

    try {
      const newUser = new UserSchema(req.body)

      const savedUser = await newUser.save()

      res.status(201).send({
        message: 'User criado',
        savedUser,
      })
    } catch (err) {
      console.error(err)
      res.status(500).send({
        message: err.message,
      })
    }
  }


const buscarTodasCozinhas = async (request, response) => {
    try {
        const cozinha = await CozinhaSchema.find()
        if (cozinha.length == 0) {
            return response.status(200).json({ message: `Não há nenhuma cozinha com este nome` })
        }
        response.status(200).json(cozinha)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const buscarCozinhaId = async (request, response) => {
    const { id } = request.params
    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({ message: `Por favor digite o id da cozinha novamente` })
        }
        const cozinha = await CozinhaSchema.find({ id: id })
        if (cozinha.length == 0) {
            return response.status(200).json({ message: `Cozinha não encontrada` })
        }
        response.status(200).json(cozinha)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const criarCozinha = async (request, response) => {
    const { id, cnpj, iniciativa_privada,
        endereco: { cep, rua, numero, complemento, referencia, estado, cidade, bairro },
        bairros_atuantes, site, atividades_disponiveis, pessoa_responsavel } = request.body;

const buscaBairro = await CozinhaSchema.find({ bairro: bairro })
let ExisteBairro = buscaBairro.filter((cozinha) => cozinha.endereco.bairro === bairro)
let nomeExisteBairro = ExisteBairro.find((cozinha) => cozinha.nome === nome)
    if (nomeExisteBairro) {
        return response.status(404).json({ message: `Não é possível cadastrar a sua cozinha, esse nome já existe neste bairro` });
    }

const buscaCnpj = await CozinhaSchema.find({ cnpj })
    if (buscaCnpj.length !== 0) {
            return response.status(400).json({ message: `Numero do CNPJ já está sendo utlizado por outro usuario` });
        }

    try {
        const cozinha = new CozinhaSchema({
            id: id,
            cnpj: cnpj,
            iniciativa_privada: iniciativa_privada,
            endereco: {
                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
                referencia: referencia,
                estado: estado,
                cidade: cidade,
                bairro: bairro
            },
            bairros_atuantes: bairros_atuantes,
            site: site,
            atividades_disponiveis: atividades_disponiveis,
            pessoa_responsavel: pessoa_responsavel
        })

        const salvarCozinha = await cozinha.save();
        resposta.status(201).json({
            cozinha: salvarCozinha
        })

    } catch (error) {
        response.status(400).json({
            messagem: error.message
        })

    }

   
}

const deletarCozinha = async (request, response) => {
    const { id } = request.params

    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({ message: `Por favor digite o id da cozinha corretamente.` })
        }
        const cozinhaEncontrada = await CozinhaSchema.deleteOne({ id: id })
        console.log(cozinhaEncontrada)
        if (cozinhaEncontrada.deletedCount === 1 || cozinha.length > 0) {
            return response.status(200).send({ message: `Cozinha deletada com sucesso!` })
        } else {
            return response.status(404).send({ message: "Cozinha não encontrada." })
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

const atualizarCozinha = async (request, response) => {

    const { id } = request.params
    const { nome, cnpj, iniciativa_privada,
        endereco: { cep, rua, numero, complemento, referencia, estado, cidade, bairro },
        bairros_atuantes, site, atividades_disponiveis, pessoa_responsavel } = request.body;
    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o id da cozinha corretamente.`
            })
        }
        const cozinhaEncontrada = await CozinhaSchema.updateOne({
            nome, cnpj, iniciativa_privada,
            endereco: { cep, rua, numero, complemento, referencia, estado, cidade, bairro },
            bairros_atuantes, site, atividades_disponiveis, pessoa_responsavel
        })
        const cozinhaporId = await CozinhaSchema.find({ id: id })
        if (cozinhaporId.length == 0) {
            return response.status(404).json({
                message: `A cozinha não foi encontrada.`
            })
        }
        response.json({ cozinhaporId })
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    criarCozinha,
    buscarCozinhaId,
    buscarTodasCozinhas,
    deletarCozinha,
    atualizarCozinha, 
    cadastrarUsuario
}