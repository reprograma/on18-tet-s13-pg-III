const rotas = require("express").Router()
const controller = require("../controllers/cozinhaController")

router.post("/criarusuario", cozinhaController.cadastrarUsuario);
router.post("/login", authController.login);
rotas.post("/criar", controller.criarCozinha);
rotas.get("/cozinha/:id", controller.buscarCozinhaId);
rotas.get("/cozinha", controller.buscarTodasCozinhas);
rotas.post("/criar", controller.criarCozinha);
router.delete("/cozinha/:deletar/:id", checkAuth, cozinhaController.deletarCozinha);
router.patch("/Cozinha/:atualizar/:id", checkAuth, cozinhaController.atualizarCozinha);



module.exports = router;