require('dotenv').config()
const database = require('./database/mongoConfig')
const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

database.connect()

module.exports = app 