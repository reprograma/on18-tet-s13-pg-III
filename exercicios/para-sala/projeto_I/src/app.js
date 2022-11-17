require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const database = require("./database/mongoConfig");
const BibliotecaRoutes = require("./routes/BibliotecasRoutes");

app.use(cors());
app.use(express.json());

app.use("/biblioteca", BibliotecaRoutes);

database.connect();

module.exports = app;