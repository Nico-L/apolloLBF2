const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Query: {
        atelierNbPlacesRestantes: async (parent, args) => {
            const adresse = cms + args.id + '?token=' + tokenSite
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