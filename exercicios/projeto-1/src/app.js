const express = require("express")

const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req,res )=>{
    res.status(200).send("Ler é saber")
})

module.exports = app