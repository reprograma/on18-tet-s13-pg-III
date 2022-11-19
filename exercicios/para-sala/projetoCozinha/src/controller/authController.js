const UserSchema = require('../models/userSchema')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const criarLogin = async (req,res) => {
    try{
    UserSchema.findOne({ email: req.body.email}), (error,user) => {
        console.table("usuario e esse aquiih meu mooor", user)
        if (!user) {
                    return res.status(404).send({
                      message: 'Usuário não encontraaado, que pena ne meu anjo',
                      email: "$ {req.body.email}"
                    })}
                    const validPassword = bcrypt.compareSync(req.body.password, user.password)
                    console.log("A SENHA EH VALIDA AMOR?", validPassword)
                    
                    if(!validPassword){
                        return res.status(401).send({
                        message: "Amor, sua senha esta invalida",
                        statusCode: 401
                        })
                    }
                    
                    // jwt.sign(nome do usuário, SEGREDO)
                    const token = jwt.sign({name: user.name}, SECRET);
                    console.log("O TOKEN EH ESSE AKI", token)
                    
                    res.status(200).send({
                        message: "Amor, vc esta logadah",
                        token
                    })
                }
            } catch(err) {
                console.error(err)
            }                
    }

    module.exports = {
        criarLogin
    }


// const criarLogin = async (req,res) =>{
//     const salvaraSenha = bcrypt.hashSync(req.body.senha, 10)
//     req.body.senha = salvaraSenha

//     const emailexistente = await UserSchema.exists({ email: req.body.email})
//     if (emailExists) {
//         return res.status(409).send({
//           message: 'Email já cadastrado, CONFLITOUUUU',
//         })
//       }
//     try{
//         const novousuario = new UserSchema (req.body)
//         const salvaroUsuario = await novousuario.save()

//         res.status(201).send({
//             message:"Olá meu amooor, tudo bom ? Seu user foi criado com muiiiiiito sucesso, meus parabéiiins",
//             salvaroUsuario,
//         })
//     }catch(err){
//         console.error(err)
//         res.status(500).send({
//             message: err.message,
//         })
//     }
// }

// module.exports = {
//     criarLogin
// }