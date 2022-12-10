const UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const login = (req, res) => {
    try{
        UserSchema.findOne({ email: req.body.email }, (error, user) => {
            console.log("Usuário encontrado:", user)
            if (!user) {
                return res.status(404).send({
                    message: 'Usuário não encontrado',
                    email: ('${req.bory.email}')
                });
            }

            const validPassword = bcrypt.compareSync(req.body.password, user.password)
            console.log("Verificou a senha?", validPassword)

            if(!validPassword){
                return res.status(401).send({
                message: "senha inválida",
                statusCode: 401
                })
            }

            const token = jwt.sign({name: user.name}, SECRET);
            console.log("O TOKEN EH ESSE AKI", token)

            res.status(200).send({
                message: "Eita, ta logadahhh!",
                token})
            })
         
        } catch(error) {
            console.error(error)
        }
    }
    module.exports = {
        login
    };
