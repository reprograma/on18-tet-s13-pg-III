const mongoose = require('mongoose');

const cozinhaSchema = new mongoose.Schema({

    
    nome: {
        type: String,
        required: true
    },
   cnpj: {
        type: Number,
        required: true
   },
   telefone:{
       type: Number,
       required: true
   },
   iniciativa_privada:{
        type: Boolean,
   },
   site:{
        type: String,
   },
   atividades_disponiveis:{
        type: Array,
        required: true
   },
   resposavel:{
        type: String,
        required: true
   },
   endereco:{  
        cep: {
            type:String,
            required:true
        },
        rua: {
            type: String,
            required: true
        },
        numero:{
            type: Number,
            required: true
        },
        complemento: {
            type: String
        },
       referencia:{
            type: String
       },
       estado:{
            type: String,
            required:true
       },
       cidade:{
            type: String,
            required:true
       },
       bairro:{
            type: String,
            required:true
       },
    },
    bairros:{
        type: Array,
        required: true
   }
})

module.exports = mongoose.model('cozinha',cozinhaSchema);