const mongoose = require('mongoose');

const cozinhaSchema = new mongoose.Schema({
    nome: {
        type: String, 
        required: true

    },
    cnpj:{
        type: Number,
        required: true

    },
    iniciativa_privada:{
        type: Boolean,
        required: true
        
    },
    endereco:{
        cep:{
        type: Number,
        required: true
        },
        rua:{
        type: String,
        required: true
        },
        numero:{
        type: Number,
        required: true
        },
        complemento:{
        type: String,
        required: true
        },
        referencia:{
        type: String,
        required: true
        },
        estado:{
        type: String,
        required: true
        },
        cidade:{
        type: String,
        required: true
        },
        bairro:{
        type: String,
        required: true
        },


    },
    bairros: {
        type: String,
        required: true
    },
    site:{
        type: String,
        required: false
    },
    atividades_disponiveis:{
        type: String,
        required: true
    },
    responsavel_cozinha: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model("cozinha", cozinhaSchema)
;