const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Mutation: {
        effaceReservation: async (parent, args) => {
            const adresse = cms + 'reservations/' + args.idReservation + '?token=' + tokenSite
            effaceInscription = await axios.delete(adresse)
                .then((retour) => {return retour.data.id})
                .catch((erreur) => console.log('erreur', erreur))
            return {
                reservation: effaceInscription
            }
        }
    }
}

module.exports = resolvers;