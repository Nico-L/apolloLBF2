const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE

const resolvers = {
    Query: {
        atelierNbPlacesRestantes: async (parent, args) => {
            const adresse = 'http://cms.labonnefabrique.fr/ateliers/' + args.id + '?token=' + tokenSite
            atelier = await axios.get(adresse)
            .then(response => {
                // Handle success.
                //console.log("retour", response.data)
                return response.data
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
            const nbParticipants = atelier.nbParticipants
            let nbInscrits = 0
            atelier.inscriptions_ateliers.forEach((inscription) => nbInscrits += inscription.lesInscrits.length)
            let places = nbParticipants - nbInscrits
            return {
                places: places
            }
        }
    }
}

module.exports = resolvers;