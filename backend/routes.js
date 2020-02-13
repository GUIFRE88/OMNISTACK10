// Importa apenas a parte de Routes do Express
const { Router } = require('express')
const DevController = require('./src/controllers/DevController')
const SearchController = require('./src/controllers/SearchController')
// Faz a utilização das rotas.
const routes = Router()

// Cria primeira rota
// request - Requisição enviada.
// response - Resposta retornada.

// Tipos de Parâmetros dentro do Express.
// Query Params: é utilizado apenas no metodo GET, para filtrar/paginações de informações. (request.query)
// Route Params: é utilizado no metodo PUT e DELETE, para identificar um recurso que serão alterado/deletado. (request.params)
// Body: é utilizado principlamente no POST, são as informações que serão gravadas. (request.body)
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

// metodos HTTP que serão utilizados.
// get - Busca informação
// post - Criar informação
// put - Alterar informação
// delete - Excluir informação

// Exporta as rotas para que fique visivel ao APP
module.exports = routes