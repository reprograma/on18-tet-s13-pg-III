const mongoose=require('mongoose')
require('dotenv').config();
const uri=process.env.MONGO_URI


const connectDb=async()=>{
    try{
        
      await mongoose.connect(uri,{ 
          useNewUrlParser:true,
          useUnifiedTopology:true


        })
        console.log("Banco de dados Conectado")
    }
    catch(error){
        console.log(error.message)
    }
}

module.exports={connectDb}