require('dotenv').config()
const express= require("express")
const cors=require("cors")
const cozinhaRotas = require("./routes/cozinhaRoutes")
const app=express()

const database = require('./database/mongoConfig');

app.use(cors());
app.use(express.json());

database.connect();
app.get("/",(req,res)=>{
    res.status(200).send("pronto")
})
app.use("/cadastro",cozinhaRotas)
 module.exports=app