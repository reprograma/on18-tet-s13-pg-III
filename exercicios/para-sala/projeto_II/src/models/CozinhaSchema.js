const mongoose = require("mongoose");

const cozinhaSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String, 
        required: true
    },
    cnpj: {
        type: String, 
        required: true
    },
    iniciativa_privada: {
        type: Boolean
    },
    endereco: {
        cep:{
            type: String,
            required: true
        }, 
        rua: {
            type: String,
            required: true,
        },
        numero: {
            type: String,
            required: true,
        },
        complemento: {
            type: String,
        },
        referencia: {
            type: String,
            required: true,
        },
        estado: {
            type: String,
            required: true,
        },
        cidade: {
            type: String,
            required: true,
        },
        bairro: {
            type: String,
            required: true,
        },
    },
    bairros_atuantes : [{
        type: String,
        required: true
    }
    ],
    site: {
        type: String, 
        required: false
    },
    atividades_disponiveis: [],
    pessoa_responsavel_pela_cozinha: {
        type: String,
        required: true
    }

}, {timestamp: true})

module.exports = mongoose.model("cozinha", cozinhaSchema);