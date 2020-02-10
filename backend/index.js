// Importa o Express.
const express = require('express') 

// Inicia a aplicação com Express.
const app = express()  

// Determina que será utilizado requisições JSON
app.use(express.json())

// Cria primeira rota
// request - Requisição enviada.
// response - Resposta retornada.

// Tipos de Parâmetros dentro do Express.
// Query Params: É utilizado apenas no método GET, para filtrar/paginações de informações. (request.query)
// Route Params: É utilizado no método PUT e DELETE, para identificar um recurso que será alterado/deletado. (request.params)
// Body: É utilizado principlamente no POST, são as informações que serão gravadas. (request.body)
app.get('/', (request, response) => {
    return response.json({ message: 'Hello Teste'})
})

// Métodos HTTP que serão utilizados.
// get - Busca informação
// post - Criar informação
// put - Alterar informação
// delete - Excluir informação

app.listen(3333)
