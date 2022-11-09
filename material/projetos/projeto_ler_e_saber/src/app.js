require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const database = require("./database/mongooseConnect");
const bibliotecaRoutes = require("./routes/bibliotecaRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/ler-e-saber", bibliotecaRoutes);

database.connect();

module.exports = app;
