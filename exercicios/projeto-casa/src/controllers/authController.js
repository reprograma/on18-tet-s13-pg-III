const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const login = (req,res) =>{
    try{
        userSchema.findOne({email:req.body.email},(error,user)=>{
            if(!user){
                return res.status(404).send({
                    message: "Usuário não encontrado"
                })
            }
            const validPassword = bcrypt.compareSync(req.body.password, user.password)
            if (!validPassword){
                return res.status(401).send({
                    message: "Senha inválida"
                })
            }
            const token = jwt.sign({name: user.name}, SECRET);
            res.status(200).send({
                message: "ANOTE SEU TOKEN:",
                token
            })
        })  
    }catch(err){
        console.log(err)
    }
    
};

module.exports = {
    login
};