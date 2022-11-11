const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI

//função de conexão com o MongoDB
const connect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Banco de dados conectado!")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connect
} 