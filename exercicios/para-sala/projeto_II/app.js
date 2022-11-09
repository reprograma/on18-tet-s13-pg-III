const Router=require('../projeto_II/Routers/router')
const express=require('express')
const cors=require('cors');
const app = require('../projeto_II/Routers/router');


app.use(express.json());
app.use(cors());

app.use('/', (req,res)=>{
    res.status(200).send('Bem vindo á Cozinha Comunitária')
})



app.use('/cozinha', Router)

exports.modules=app;