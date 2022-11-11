const mongoose = require ("mongoose")
const uri = process.env.MONGODB_URI

const connect = async () =>{
    try{
        await mongoose.connect (uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(error.message, "esta errado aqui")
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    connect
}