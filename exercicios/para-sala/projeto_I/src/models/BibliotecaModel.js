//geralmente nome do arquivo é em maiúsculo por ser POO
const mongoose = require('mongoose');

//Schema é algo que sera compartilhado no mongodb
const bibliotecaSchema = new mongoose.Schema({
    nome: {
        type : String,
        required: true
    },
    cnpj: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        required: false
    },
    iniciativa_privada: {
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
    bairros_atuantes: [

    ],
    site: {
        type: String,
        require: false
    }, 
    atividades_disponiveis: [

    ],
    responsavel: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('biblioteca', bibliotecaSchema)