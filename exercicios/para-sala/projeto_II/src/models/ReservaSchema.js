const mongoose = require('mongoose')

const reservaSchema = new mongoose.Schema({

    cozinha: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cozinha',
        required: true
    },
    data_reserva:{
        type: Date
    }
})

module.exports = mongoose.model('reserva', reservaSchema);