const controller = require("../controllers/bibliotecaController")
const router = require("express").Router()

router.get("/", controller.buscarTodasBibliotecas)
router.get("/:id", controller.buscarBibliotecaId)
router.post("/", controller.criarBiblioteca)
router.delete("/:id", controller.deletarBiblioteca)
router.patch("/:id", controller.atualizarBiblioteca)

module.exports = router