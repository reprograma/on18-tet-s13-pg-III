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
    endereco:[{  
        cep:{
        type: String,
        required: true
        },
        rua:{
        type: String,
        required: true
        },
        numero:{
        type: String,
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
        type: Array,
        required: true
        },
    }],
    bairros_atuacao: {
        type: Array,
        required: true
    },
    site:{
        type: String,
        required: false
    },
    atividades_disponiveis:{
        type: Array,
        required: true
    },
    responsavel_cozinha: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model("cozinha", cozinhaSchema)
;