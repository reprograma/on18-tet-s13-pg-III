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
        required: true,
        unique: true
    },
    iniciativa_privada: { // boolean (sim ou não)
        type: Boolean
    },
    endereco: {
        cep: {
            type: String,
            require: true
        },
        rua: {
            type: String,
            require: true
        },
        numero: {
            type: Number},
        complemento: {
            type: String},
        referencia: {
            type: String},
        estado: {
            type: String},
        cidade: {
            type: String},
        bairro: {
            type: String}
    },
    bairros_que_atuam : [{
        type: String,
        require: true
    }],
    
    site: {
        type: String
    },
    atividades_disponiveis: [ ],
    pessoa_responsavel: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("cozinha", cozinhaSchema)
