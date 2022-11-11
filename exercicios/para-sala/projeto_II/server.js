require('dotenv').config();

const app = require('./scr/app')

const PORT = process.env.PORT; 


app.get('/', (req, res) => {
res.json({message:'Oi está rodando'})
});


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

