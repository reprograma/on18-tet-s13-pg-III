const express = require('express')
const router = express.Router();

const controller = require('../controller/reservaController')


router.post("/reserva ", controller.agendarReserva)


module.exports = router;