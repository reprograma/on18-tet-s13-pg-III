const mongoose = require('mongoose')

const bibliotecaSchema = new mongoose.Schema({


  id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId,
   
  },

  nome: {
    type: String,
    
    
  },

  cnpj: {
    type: String,
    
    
  },

  telefone: {
    type: String,
  },

  iniciativa_privada: {
    type: Boolean
  },

  
  endereco: {
        cep: String,
        rua: String,
        numero: String,
        complemento: String,
        referencia: String,
        estado: String,
        cidade: String,
        bairro: String,
        
  },


  bairros_atuantes: {
    type:Array
  },

  site: {
    type: Array,
    
  },
  
  atividades_disponiveis: {
    type: Array
  },


  pessoa_responsavel: {
    type: String
   
    
  }


}, { timestamps: true })

module.exports = mongoose.model('biblioteca', bibliotecaSchema)