// Importa Mongoose para criar Schema
const mongoose = require('mongoose')

// Cria a Schma do banco
const DevShema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], // Cria vetor de String
})

// Exporta o modelo do Schema
module.exports = mongoose.model('Dev', DevShema)