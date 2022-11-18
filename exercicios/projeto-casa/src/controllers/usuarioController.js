const userSchema = require("../models/userSchema")
const bcrypt = require("bcrypt");

const createUser = async(req,res)=>{
    const emailExists = await userSchema.exists({email: req.body.email});
    if (emailExists){
        return res.status(409).send({
        message: "Email já cadastrado."
        })
    }

    const hashedPassword = bcrypt.hashSync(req.body.password,10)
    req.body.password = hashedPassword

    try{
        const newUser = new userSchema(req.body);
        const savedUser = await newUser.save();

        res.status(201).send({
            message: "Usuário criado",
            savedUser
        })
    }catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

module.exports = {
    createUser
}