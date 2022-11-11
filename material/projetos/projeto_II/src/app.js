require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const database = require('./database/mongoConfig')

app.use(express.json());
app.use(cors());

database.connect();

module.exports = app;





