const mongoose = require('mongoose');

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
        type: Number, 
        required: true
    },
    iniciativa_privada: { // boolean (sim ou não)
        type: Boolean
    },
    endereco: {
        cep: Number,
        rua: String,
        numero: Number,
        complemento: String,
        referencia: String,
        estado: String,
        cidade: String,
        bairro: String
    },
    bairros_que_atuam : [{
        type: String
    }],
    site: {
        type: String, 
        required: false
    },
    atividades_disponiveis: [{
        type: String
    }],
    pessoa_responsavel_pela_cozinha: {
        type: String
    }
})

module.exports = mongoose.model("cozinha", cozinhaSchema)
