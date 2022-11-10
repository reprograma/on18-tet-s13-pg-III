const controller = require("../controllers/cozinhaController")
const router = require("express").Router()

router.get("/", controller.buscarTodasCozinhas)
router.get("/:id", controller.buscarCozinhaId)
router.post("/", controller.criarCozinha)
router.delete("/:id", controller.deletarCozinha)
router.patch("/:id", controller.atualizarCozinha)

module.exports = router