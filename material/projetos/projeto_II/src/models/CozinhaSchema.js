const mongoose = require("mongoose")

const cozinhaSchema = new mongoose.Schema({

nome: {
    type: String,
    required: true
},
cnpj: {
    type: Number,
    required: true 
},
iniciativa: {
    type: Boolean,
    required: false 
},
endereco:{
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
        requires: true 
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
bairros_que_atuam:{
    type: Array,
    required: true
},
site:{
    type: String,
    required: false
},
atividades_disponiveis: {
    type: Array,
    required: false
},
pessoa_responsavel: {
    type: String,
    required: true
}
})

module.exports = mongoose.model("cozinha", cozinhaSchema)