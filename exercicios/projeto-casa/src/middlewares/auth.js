const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

exports.checkAuth = (req, res,next)=>{
    const authHeader = req.get("authorization");

    if (!authHeader){
        return res.status(401).send({
            message: "Acesso não autorizado 1",
            statusCode: 401
        });
    }

    const token = authHeader.split(" ")[1];
    console.log("tokenzinhooo", token)

    if (!token){
        return res.status(401).send({
            message: "Erro de token"
        })
    }

    try{
        jwt.verify(token,SECRET,(err)=>{
            if(err){
                return res.status(401).send({
                    message: "Acesso não autorizado 2"
                })
            }
            next();
        })
    }catch(err){
        console.error(err)
    }
}