const mongoose = require('mongoose')

const reservaSchema = new mongoose.Schema({

    cozinha: {
        type: mongoose.SchemaType.ObjectId,
        ref: 'cozinha',
        required: true
    },
    data_reserva:{
        type: Date
    }
})

module.exports = mongoose.model('reserva', reservaSchema);