const mongoose = require("mongoose");
const config = require("../../config.json");
const Biblioteca = require("../models/bibliotecaModel")

const uri = `mongodb+srv://kathalice:${config.password}@ler-e-saber.bjinctf.mongodb.net/?retryWrites=true&w=majority`

const tryCatchWrapper = fn => {
    return async function wrappedFn(req, res) {
        try {
            await fn(req, res);
        } catch (err) {
            res.status(500).send({
                message: err.message
            })
        }
    }
}

const get = async (req, res) => {
    mongoose.connect(uri)
    const result = await Biblioteca.find(req.query)
    res.status(200).send(result)
}

const post = async (req, res) => {
    mongoose.connect(uri);
    const newBiblioteca = new Biblioteca({
        _id: new mongoose.Types.ObjectId(),
         ...req.body
    });
    
    newBiblioteca.save(err => {
        if (err) { 
            res.status(400).send({message: err.message})
        } else { 
            res.status(201).send(newBiblioteca) 
        }
    });
}

module.exports = { tryCatchWrapper, get, post }