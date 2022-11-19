require("dotenv").config()
const app = require ("./src/app")

const PORTA = process.env.PORTA;

app.listen (PORTA, () => console.log ("Rodando na PORTA" + PORTA))
