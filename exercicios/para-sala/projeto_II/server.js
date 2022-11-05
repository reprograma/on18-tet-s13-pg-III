require('dotenv').config() //invoca o dotenv
const app = require("./src/app") //invoca app
const PORT = process.env.PORT // traz o valor de port do arquivo .env

app.get('/', function(req, res) {
    res.send({
        message: 'Primeiro GET OK'
    })
})

app.listen(PORT, () => console.log(`Projeto II - Cozinha Comunitária rodando na porta ${PORT}!`)) //define a porta do servidor