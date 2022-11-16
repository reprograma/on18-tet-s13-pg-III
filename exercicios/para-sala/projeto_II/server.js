require('dotenv').config();
const express= require("express");
const porta=process.env.PORT


let app=express();

app.listen(porta,()=>{
    console.log('Estou pegando lalala')
})



