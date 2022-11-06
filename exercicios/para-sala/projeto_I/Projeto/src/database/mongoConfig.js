const mongoose = require('mongoose')
const conexao = process.env.MONGODB_URI

const connect = async()=>{
    try {
        await mongoose.connect(conexao,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Banco de dados Livraria conectado com sucesso...')
    } catch (error) {
        console.log(error.message)
    }
}



module.exports = {
    connect
}