require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();

const database = require('./database/moogoseConnect');
const rotasCozinha = require('./routes/RoutesSchema');

app.use(cors());
app.use(express.json())

// app.use("/cozinhas", rotasCozinha);

database.connect();

module.exports = app


