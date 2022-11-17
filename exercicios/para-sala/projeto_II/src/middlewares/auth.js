const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

exports.checkAuth = (req, res, next) => {

    const authHeader = req.get("Authoriation");
    if(!authHeader) {
        return res.status(401).send({
            message: "Sem autorização!",
            statusCode: 401
        });
    }

    const token = authHeader.split(' ')[1];
    console.log(token)

    if(!token) {
        return res.status(401).send({
            message: "erro no token"
        })
    }

    try {
        jwt.verify(token, SECRET, (error) => {
            if(error) {
                return res.status(401).send({
                    message:"Não autorizado!"
                })
            }
            next();
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}