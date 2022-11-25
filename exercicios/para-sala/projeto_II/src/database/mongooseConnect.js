require('dotenv').config();

const PORT = process.env.PORT

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;


const connect = async() => {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`Banco de dados conectado na  porta ${PORT}! :)`)
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    connect

};
