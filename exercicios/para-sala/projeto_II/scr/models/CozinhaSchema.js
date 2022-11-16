const mongoose = require('mongoose');

const cozinhaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cnpj: {
        type: Number,
        require: true,
        unique: true
    },
    telefone: {
        type: Number,
        require: true
    },
    iniciativa_privada:{
        type:Boolean
       
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
            type: String,
           required: true 
        }, 
        complemento: {
            type: String,
           required: true
        }, 
        referencia: {
            type: String,
          required: true
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
    bairros_atuantes: [{
        type: String,
        require: true
    }],
    site: {
        type: String    
    },
    atividades_disponiveis: [{
        type: String
    }],
    pessoa_responsavel:{
        type: String,
        require: true
    }
}, {timestamp: true})

module.exports = mongoose.model('cozinha', cozinhaSchema)