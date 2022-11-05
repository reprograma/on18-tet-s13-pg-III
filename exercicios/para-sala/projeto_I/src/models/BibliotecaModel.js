const mongoose = require('mongoose');

const BibliotecaSchema = new mongoose.Schema('Biblioteca', {
    _id: new mongoose.Types.ObjectId,
    nome: { type: String, required: true },
    cnpj: { type: String, required: true },
    telefone: String,
    iniciativaPrivada: Boolean,
    endereco: [Endereco],
    bairrosQueAtuam: [String],
    site: String,
    atividadesDisponiveis: [String],
    pessoaResponsavel: { type: String, required: true}
})

const Endereco = new mongoose.Schema({
    cep: {type: String, required: true},
    rua: {type: String, required: true},
    numero: {type: Number, required: true},
    complemento: String,
    referencia: String,
    estado: {type: String, required: true},
    cidade: {type: String, required: true},
    bairro: {type: String, required: true}
})

module.exports = Biblioteca = mongoose.model('Biblioteca', BibliotecaSchema)
