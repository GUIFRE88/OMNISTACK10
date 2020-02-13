// Impor Schema do banco.
const Dev = require('../models/Dev')

// Quebra a string para array.
const parseStringAsArray = require('./utils/parseStringAsArray')

module.exports = {
    async index(request, response){

        const { latitude, longitude, techs } = request.query
        const techsArray = parseStringAsArray(techs)

        // Buscar todos os Devs em um raio de 10km.
        // Filtar todos os Devs por tecnologia. 
        const devs = await Dev.find({
            techs: {
                $in : techsArray, // O $in determina se o valor passado está dentro do mongodb.
            },
            location: {
                $near: { // Encontra objetos perto do valor passado. 
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000, // 10 km 
                }
            },
        })


        return response.json( { devs } )
    }
}