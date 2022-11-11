require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const database = require('./database/moogoseConnect');
const cozinhaRoutes = require('./routes/cozinhaRoutes')

app.use('/cozinha', cozinhaRoutes);
database.connect();

module.exports = app;
