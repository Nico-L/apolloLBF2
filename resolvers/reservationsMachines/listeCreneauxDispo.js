const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Query: {
        listeCreneauxDispo: async (parent, args) => {
            const headers = {
                'Content-Type': 'application/json'
            }
            const adresse = cms + 'horaires-reservations/?token=' + tokenSite
            listeCreneaux = await axios.get(adresse,headers)
                .then((retour) => {return retour.data})
                .catch((error) => console.log('erreur listeCreneaux', error))
            return {
                creneaux: JSON.stringify(listeCreneaux)
            }
        }
    }
}

module.exports = resolvers;