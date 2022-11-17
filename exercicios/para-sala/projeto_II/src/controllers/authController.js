const CozinhaSchema = require("../models/CozinhaSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const login = (req, res) => {
    try {

        CozinhaSchema.findOne({ email: req.body.email}, error, user => {
            console.log("Usuário aquii!", user)
            if(!user) {
                return res.status(404).send({
                    message: "Usuário não encontrado",
                    email: `${req.body.email}`
                });
            }

            const validPassword = bcrypt.compareSync(req.body.password, user.password)
            console.log("A senha é válida??", validPassword)

            if(!validPassword) {
                return res.status(401).senda({
                    message: "Senha invalida",
                    statusCode: 401
                })
            }

            const token = jwt.sign({ name: user.name }, SECRET);
            console.log("Token aqui!")

            res.status(200).send({
                message: "Estas logadinhaaa!",
                token
            })
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    login
}