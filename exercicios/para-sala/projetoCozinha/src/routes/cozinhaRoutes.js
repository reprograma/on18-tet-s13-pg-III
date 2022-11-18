const express = require ("express")
const router = express.Router()

const controller = require ("../controller/cozinhaController")
const controlar = require ("../controller/authController")

router.get("/criar",controller.criarCozinhaProjeto)
router.get("/buscar",controller.buscarCozinha)
router.get("/:id",controller.idCozinha)
router.post("/cozinha",controller.criacaoCozinha)
router.delete("/:id",controller.deletarCozinha)
router.post("/:id",controller.cadastroAtualizado)
router.get("/all", controlar.criarLogin);
router.post("/create", controlar.criarLogin);
router.post("/login", controlar.criarLogin)


module.exports=router