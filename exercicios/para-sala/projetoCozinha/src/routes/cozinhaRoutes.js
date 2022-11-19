const express = require ("express")
const router = express.Router()

const controllerCozinha = require ("../controller/cozinhaController")
const controllerAuth = require ("../controller/authController")
const controllerUser = require ("../controller/userController")
const{checaAutenticacao} = require ("../middlewares/auth")


//rotas somente de cozinha
router.get("/criar",controllerCozinha.criarCozinhaProjeto)
// router.post("/buscar",checaAutenticacao, controllerCozinha.buscarCozinha)
router.get("/:id",controllerCozinha.idCozinha)
// router.post("/cozinha",checaAutenticacao, controllerCozinha.criacaoCozinha)
// router.delete("cozinha/:id",checaAutenticacao, controllerCozinha.deletarCozinha)
router.post("/:id",controllerCozinha.cadastroAtualizado)

//rotas use
router.post("/criar", controllerUser.criarUsuario);

//rota de login
router.post("/login", controllerAuth.criarLogin);

module.exports=router