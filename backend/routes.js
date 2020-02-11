// Importa apenas a parte de Routes do Express
const { Router } = require('express')

// Importa Axios para que seja possível acessar apis externas.
const axios = require('axios')

// Faz a utilização das rotas.
const routes = Router()

// Cria primeira rota
// request - Requisição enviada.
// response - Resposta retornada.

// Tipos de Parâmetros dentro do Express.
// Query Params: É utilizado apenas no método GET, para filtrar/paginações de informações. (request.query)
// Route Params: É utilizado no método PUT e DELETE, para identificar um recurso que será alterado/deletado. (request.params)
// Body: É utilizado principlamente no POST, são as informações que serão gravadas. (request.body)
routes.post('/devs', async (request, response) => {

    const { github_username } = request.body

    // Verifica API do github passando o usuário. 
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    console.log(apiResponse.data)

    return response.json({ message: 'Hello Teste'})
})

// Métodos HTTP que serão utilizados.
// get - Busca informação
// post - Criar informação
// put - Alterar informação
// delete - Excluir informação

// Exporta as rotas para que fique visível ao APP
module.exports = routes