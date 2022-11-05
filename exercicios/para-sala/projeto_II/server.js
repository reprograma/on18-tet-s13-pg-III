require('dotenv').config() //invoca o dotenv
const app = require("./src/app") //invoca app
const PORT = process.env.PORT // traz o valor de port do arquivo .env
app.get('/', function(req, res) {
    app.listen(PORT, () => console.log(`Cozinha Funcionando! ${PORT}`))
}) //define a porta do servidor