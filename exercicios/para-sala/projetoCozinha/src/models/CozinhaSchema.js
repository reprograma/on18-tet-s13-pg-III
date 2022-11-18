const mongoose = require ("mongoose")

//Colocar noREADME
// _id: autogerado e obrigatório;
// nome: texto e obrigatório;
// cnpj: numero e obrigatorio;
// É uma iniciativa privada? : Boolean
// endereco objeto com:
// cep: string e obrigatório,
// rua: string e obrigatório,
// numero: number e obrigatório,
// complemento: string e opcional,
// referencia: string e opcional,
// estado: string e obrigatório,
// cidade: string e obrigatório,
// bairro: string e obrigatório;
// bairros que atuam: array;
// site: texto e não obrigatório;
// atividades disponíveis: array;
// Pessoa responsável pela cozinha: string e obrigatório;

const cozinhaSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
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
    telefone: {
        type:Number,
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
    required:true
   },
   numero:{
    type: Number,
    required:true
   },
   complemento: {
    type:String,
    required:true
   },
   referencia:{
    type:String,
    required :true
   },
   estado:{
    type:String,
    required: true
   },
   cidade:{
    type: String,
    required:true
   },
   bairro:{
    type:String,
    required:true
   }},
   bairrosqueAtuam:{
        type: Array,
        required: true
    },
    site:{
        type: String,
        required: false
    },
    atividadesDisponiveis: {
        type: Array,
        required: false
    },
    pessoaResponsavel: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("cozinha Schema", cozinhaSchema)