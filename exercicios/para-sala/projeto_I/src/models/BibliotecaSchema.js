const mongoose = require('mongoose');

const bibliotecaSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String, 
        required: true
    },
    cnpj: {
        type: String, 
        required: true
    },
    telefone: {
        type: String, 
        required: true
    },
    iniciativa_privada: {
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
        required:true
    },
    site:{
        type: String,
        required:false
},
atividades_disponiveis:{
        type: Array,
        required: false
},
pessoa_responsavel_pela_biblioteca :{
        type: String,
        required: true
},

},


{ timestamps : true })

module.exports = mongoose.model("biblioteca", bibliotecaSchema)
