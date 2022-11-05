const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
const connect = async() => {
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`conectado ao banco de dados, lets go!`)
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    connect
};