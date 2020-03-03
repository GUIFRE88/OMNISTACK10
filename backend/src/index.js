// Importa o Express.
const express = require('express') 

// Importa mongdb
const mongoose = require('mongoose')

// Importa rotas
const routes = require('../routes')

// Importa cors para que o front-end acesse a api em node.
const cors = require('cors')

// Importa modulo http
const http = require('http')

// Inicia a aplicação com Express.
const app = express()  

const server = http.Server(app)

const { setupWebsocket } = require('./websocket')

setupWebsocket(server) // Chama o WebSocket

// Faz a conexão com o AtlasDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-0k2bb.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

// Determina que será utilizado requisições JSON (deve vir antes das rotas)
app.use(express.json())

// Determina através do 'cors' terá acesso externo a aplicação.
app.use(cors())

// Determina as rotas do APP
app.use(routes)

server.listen(3333)
