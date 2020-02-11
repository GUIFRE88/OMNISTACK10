// Importa o Express.
const express = require('express') 

// Importa mongdb
const mongoose = require('mongoose')

// Importa rotas
const routes = require('../routes')

// Inicia a aplicação com Express.
const app = express()  

// Faz a conexão com o AtlasDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-0k2bb.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

// Determina que será utilizado requisições JSON (deve vir antes das rotas)
app.use(express.json())

// Determina as rotas do APP
app.use(routes)

app.listen(3333)
