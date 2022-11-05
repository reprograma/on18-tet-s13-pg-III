require("dotenv").confing();
const app = require ("./src/app")

const PORTA = process.env.PORTA;

app.get ("/", function (require,response){
    response.send({
        message:"Primeiro get"
    })
})

app.listen (PORTA, () => console.log ("Rodando na PORTA" + PORTA))