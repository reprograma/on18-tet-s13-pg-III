
require("dotenv").config()


const express = require("express")
const cors = require("cors")
const app = express()

const database = require('./database/moogoseConnect')
const bibliotecaRoutes = require("./routes/BibliotecaRoutes")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/", bibliotecaRoutes)

database.connect(); 

module.exports = app 