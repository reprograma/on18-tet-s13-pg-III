require("dotenv").config();

const database = require("./database/mongoConfig")
const express = require("express");
const cors = require("cors")
const app = express();

database.connect();
app.use(express.json())
app.use(cors())

const cozinhaRoutes = require("./routes/cozinhaRoutes")
app.use("/restaurantes", cozinhaRoutes)

module.exports = app;