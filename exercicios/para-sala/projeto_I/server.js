const app = require("./src/app")

const PORT = process.env.PORT

app.get("/", function(require, response){
    response.send({
        message:"primeiro get"
    })
})

app.listen(PORT, () => {
    console.log("servidor rodando normalmente")
})