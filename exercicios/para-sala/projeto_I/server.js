require('dotenv').config();
const PORT = process.env.PORT;
const app = require('./src/app');


app.get('/', function(req, res) {
    res.send({
        message: 'primeiro get'
    })
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))