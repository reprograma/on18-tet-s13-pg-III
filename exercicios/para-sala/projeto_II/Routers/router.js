
const express=require('express');
const router=express.Router()
const controler=require('../Controll/control')




router.get('/cozinha', controler.cozinhasCadastradas)



module.exports=app;




