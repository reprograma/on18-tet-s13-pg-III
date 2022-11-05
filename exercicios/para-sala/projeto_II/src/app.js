require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const database = require("./database/mongooseConnect");
// const cozinhaRoutes = require("./routes/cozinhaRoutes");

app.use(cors());
app.use(express.json());

// app.use("/cozinha", cozinhaRoutes);

database.connect();

app.get("/", (req, res)=> {
    res.status(200).send({
        message: 'primeiro get API ON'})
})

module.exports = app;



