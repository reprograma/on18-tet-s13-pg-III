require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const database = require('./database/mongoConfig');
const cozinhaRoutes = require("./routes/cozinhaRoutes");

app.use(express.json());
app.use(cors());

app.use("/comunitaria", cozinhaRoutes);

database.connect();

module.exports = app;





