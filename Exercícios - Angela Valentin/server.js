require('dotenv').config();

const app = require("./src/app");

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Projeto II - Cozinha Comunitária rodando na porta ${PORT}!`))