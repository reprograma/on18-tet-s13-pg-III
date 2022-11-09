const mongoose = require("mongoose")
const BibliotecaSchema = require("../models/BibliotecaSchema")

async function dbConnect(){
    return await dbConfig.bancoDeDados("biblioteca")
}

const getAll = async(request, response)=>{
    try {
        let BibliotecaSchema = await dbConnect()
        response.status(200).json(BibliotecaSchema)
    } catch (error) {
        response.status(500).json({message: })
    }
}