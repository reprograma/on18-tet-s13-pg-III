// quero checar a autorizacao do usuario

const jwt = require ("jsonwebtoken")

const SECRET = process.env.SECRET

exports.checkAuth = (req,res,next) => {
    const autorizarvoce= req.get("authorization")
    if (!autorizarvoce){
        return res.status(401).send({
            message:"Sinto muito, você não tem autorização para prosseguir",
            statusCode: 401
        })
    }

    const token = autorizarvoce.split(" ")[1]
    console.log("Toma seu tokenzinho benhêê,", token)

    if (!token) {
        return res.status(401).send({
            message:"Seu token esta com erro, favor verificar novamente :("
        })
    }
    try{
        jwt.verify(token, SECRET, (err) => {
            if (err) {
                return res.status(401).send({
                    message: "Não autorizadaaaaaaah"
                })
            }
            next()
        })
    } catch(err){
        console.error(err)
    }
    }