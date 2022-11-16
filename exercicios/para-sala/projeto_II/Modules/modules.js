const express=require('express')
const mongoose=require('mongoose')

    
const estoqueCozinha=new mongoose.Schema({
    id:{},
    nome:{
        type:String,
        required:true
    },
    cnpj:{
        type:Number,
        required:true
    },
    iniciativaPrivada:{
        type:Boolean,
    },
    endereco:{
        cep:{
            type:String,
            required:true
        },
        rua:{
            type:String,
            require:true
        },    
        numero:{
            type:Number,
            require:true
        },
        complemento:{
            type:String,
            require:false
        },    
        referenca:{
            type:String,
            require:false
        },    
        estado:{
            type:String,
            require:true
        },
        cidade:{
            type:String,
            require:true
        },   
         bairro:{
            type:String,
            require:true
        }, 
   
    },

    bairroAtuante:[],
    site:{
        type:String,
        require:false
    },
    atividadeDisponivel:{
        type:Array
    },
    responsavel:{
        type:String,
        require:true
    }
})


module.exports=estoqueCozinha()

