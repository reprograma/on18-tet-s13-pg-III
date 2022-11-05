const mongoose = require('mongoose');

const cozinhasSchema = new mongoose.Schema([{
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
    "É uma iniciativa privada?": { // boolean (sim ou não)
        type: String
    },
    endereco: {
        required: true,
        cep: Number,
        rua: String,
        numero: Number,
        complemento: String,
        referencia: String,
        estado: String,
        cidade: String,
        bairro: String
    },
    "Bairros que atuam" : [{
        type: String
    }],
    site: {
        type: String, 
        required: false
    },
    "atividades disponiveis": [{
        type: String
    }],
    "Pessoa responsável pela cozinha": {
        type: String, 
        required: true
    }
}])
