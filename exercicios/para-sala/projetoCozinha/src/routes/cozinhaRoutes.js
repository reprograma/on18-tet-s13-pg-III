const express = require ("express")
const router = express.Router()

const controller = require ("../controllers/cozinhaController")

router.get("/cozinha",controller.buscarCozinha)
router.get("/cozinha/[id]",controller.idCozinha)
router.post("/cozinha",controller.criacaoCozinha)
router.delete("/cozinha/[ID]",controller.deletarCozinha)
router.post("/cozinha/[ID]",controller.cadastroAtualizado)


module.exports=router