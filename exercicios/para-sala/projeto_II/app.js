const express=require('express')
const cors=require('cors');
const app=express()

const db=require('./Database/database')
const cozinha = require('../projeto_II/Routers/router');



app.use(express.json());
app.use(cors());
db.connectDb()




app.use('/cozinha', cozinha)

app.get('/', (req,res)=>{
    res.status(200).send('Bem vindo á Cozinha Comunitária')
})


module.exports=app;