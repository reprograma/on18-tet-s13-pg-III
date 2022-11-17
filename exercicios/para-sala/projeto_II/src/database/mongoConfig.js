require("dotenv").config();

const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;

const connect = async() => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Conectado")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connect
}