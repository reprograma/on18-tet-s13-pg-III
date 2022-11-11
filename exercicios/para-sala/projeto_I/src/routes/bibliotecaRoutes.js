const express = require("express")
const router = express.Router()

const controller = require('../controllers/bibliotecaController')


router.get('/buscar', controller.buscarBibliotecas)
router.get('/:id', controller.buscarBibliotecaId)
router.post('/criar', controller.criarBibliotecas)
router.delete('/:id', controller.deletarBiblioteca)                                        
router.patch('/:id', controller.atualizarBiblioteca) 


module.exports = router