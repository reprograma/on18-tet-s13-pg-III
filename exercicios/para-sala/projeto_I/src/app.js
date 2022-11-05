require("dotenv").config();

const express = require("express");

const app = express();

const cors = require("cors");

const database = require("./database/mongoConfig");

app.use(cors());
app.use(express.json());

database.connect();

module.exports = app