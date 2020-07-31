const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Query: {
        reservationByUuid: async (parent, args) => {
            const headers = {
                'Content-Type': 'application/json'
            }
            const adresse = cms + 'reservations-machines?uuid=' + args.uuid + '&token=' + tokenSite
            reservationByUuid = await axios(adresse, headers)
                .then((retour) => {return retour.data})
                .catch((erreur) => {console.log('erreur reservationByUuid', erreur)})
            return {
                reservationByUuid: JSON.stringify(reservationByUuid[0])
            }
        }
    }
}

module.exports = resolvers;