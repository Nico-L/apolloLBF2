const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Query: {
        listeReservationsByDate: async (parent, args) => {
            const headers = {
                'Content-Type': 'application/json'
            }
            const adresse = cms + 'reservations-machines?date=' + args.date + '&token=' + tokenSite
            reservationsByDate = await axios(adresse, headers)
                .then((retour) => {return retour.data})
                .catch((erreur) => {console.log('erreur listeReservationsByDate', erreur)})
            return {
                reservationsByDate: JSON.stringify(reservationsByDate)
            }
        }
    }
}

module.exports = resolvers;