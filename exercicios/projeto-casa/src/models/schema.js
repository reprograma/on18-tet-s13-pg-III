const mongoose = require("mongoose");

const cozinha = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cnpj:{
        type: Number,
        required:true
    },
    iniciativaPrivada:{
        type: Boolean,
        required:false
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
            required: false
        },
        referencia:{
            type: String,
            required: false
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
        }
    },
    bairros_atuando:{
        type: Array,
        required: true
    },
    site:{
        type: String,
        required: false
    },
    atividades:{
        type: Array,
        required: true
    },
    responsavel:{
        type: String,
        required: true
    }
    })

module.exports = mongoose.model("cozinha",cozinha)