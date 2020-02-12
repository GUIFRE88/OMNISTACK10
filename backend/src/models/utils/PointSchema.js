const mongoose = require('mongoose')

// Cria Schema para localização em map.
const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'], 
    },
    coordinates: {
        type: [Number],
        required: true,
    },
})

module.exports = PointSchema