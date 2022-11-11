const express = require ("express")
const router = express.Router()

const controller = require ("../controller/cozinhaController")

router.get("/cozinha",controller.buscarCozinha)
router.get("/:id",controller.idCozinha)
router.post("/cozinha",controller.criacaoCozinha)
router.delete("/:id",controller.deletarCozinha)
router.post("/:id",controller.cadastroAtualizado)

module.exports=router