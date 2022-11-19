require ("dotenv").config()

const express = require ("express")
const cors = require ("cors")
const app = express()


const database = require ("./database/mongoConnect")
const rotasdaCozinha = require ("./routes/cozinhaRoutes")


app.use(cors())
app.use(express.json())
app.use("/cozinha", rotasdaCozinha)


database.connect()

// colocarmos uma rota para login e proteger as rotas necessárias, exigindo um token de autorização.

module.exports = app;