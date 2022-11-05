const mogoose = require ("mongoose")
const uri = process.env.MONGODB_URI

const connect = async () =>{
    try{
        await mongoose.connect (uri,{
            useNewUrlParse: true,
            useUnifiedTopology:  true
        })
        console.log(error.message)
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    connect
}