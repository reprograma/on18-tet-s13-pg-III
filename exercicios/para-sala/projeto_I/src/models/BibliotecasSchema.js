const mongoose = require("mongoose");

const novabibliotecaSchema = new mongoose.Schema({
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
    },
    endereço: {
        cep: {
            type: String,
            required: true
        },
        rua: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        complemento: {
            type: String,
        },
        referencia: {
            type: String,
        },
        estado: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        bairro:{
            type: String,
            required: true
        },
        site:{
            type: String,
            required: true
        },
        Organização:{
            type: String,
            required: true
        }
    }
}, { timestamps : true });

module.exports = mongoose.model("Biblioteca", novabibliotecaSchema);
