const mongoose = require("mongoose")

const bibliotecaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: false
    },
    iniciativaPrivada: {
        type: Boolean,
        required: false
    },
    endereco: {
        cep: {
            type: String,
            required: true
        },
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        },
        complemento: {
            type: String,
            required: false
        },
        referencia: {
            type: String,
            required: false
        },
        estado: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        }
    },
    bairrosAtuantes: {
        type: Array
    },
    site: {
        type: String,
        required: false
    },
    atividadesDisponiveis: {
        type: Array,
        required: false
    },
    pessoaResponsavel: {
        type: String,
        required: true
    }

}, {timestamps: true})


module.exports = mongoose.model("biblioteca", bibliotecaSchema)