require("dotenv").config()

const express = require("express")
const cors = require("cors")
const app = express()

const db = require("./database/mongoConfig")
const cozinhaRoutes = require("./routes/cozinhaRoutes")

app.use(express.json())
app.use(cors())

app.use('/cozinha', cozinhaRoutes)

db.connect()

module.exports = app
