require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();

const db = require('./database/mongoConfig')
const bibliotecaRoutes = require('./routes/bibliotecaRoutes')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/bibliotecas",bibliotecaRoutes)

db.connect()

module.exports = app