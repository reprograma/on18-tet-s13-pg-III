require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { json } = require('express')
const app = express()

app.use(cors())
app.use(express.json())

module.exports = app