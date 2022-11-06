require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./database/mongoConfig')

app.use(cors())
app.use(express.json())
db.connect()

module.exports = app