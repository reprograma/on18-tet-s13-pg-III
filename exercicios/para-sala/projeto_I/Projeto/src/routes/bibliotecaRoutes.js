const express = require('express')
const router = express.Router()

const controller = require('../controllers/bibliotecaController')

router.post('/biblioteca',controller.criarBiblioteca)
router.get('/biblioteca', controller.buscarBiblioteca)
router.delete('/biblioteca/:id',controller.deletarBiblioteca)












module.exports = router
