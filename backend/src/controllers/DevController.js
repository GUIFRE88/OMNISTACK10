// Importa Axios para que seja possível acessar apis externas.
const axios = require('axios')

// Impor Schema do banco.
const Dev = require('../models/Dev')

// Nome de métodos mais usados.
// index - Mostrar uma lista de dados.
// show - Mostra apenas um registro.
// store - Criar registros. 
// update - Alterar registros. 
// destroy - Deletar registros. 


module.exports = { 
    async index(request, response){

        // Busca todos os registros dentro da Schema
        const devs = await Dev.find()

        return response.json(devs)
    }, 

    async store(request, response) {

        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        if(!dev){
            // Verifica API do github passando o usuário. 
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login , avatar_url, bio } = apiResponse.data

            // Quebra o valor String em array. E retira os espaços em branco com trim.
            const techsArray = techs.split(',').map(tech => tech.trim())

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            // Grava os valores no banco.
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }

   

      return response.json(dev)
    }


}