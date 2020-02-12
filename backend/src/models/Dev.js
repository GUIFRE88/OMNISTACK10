// Importa Mongoose para criar Schema
const mongoose = require('mongoose')

// Importa Schema de Geolocalização.
const PointSchema = require('./utils/PointSchema')

// Cria a Schma do banco
const DevShema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], // Cria vetor de String
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
})

// Exporta o modelo do Schema
module.exports = mongoose.model('Dev', DevShema)