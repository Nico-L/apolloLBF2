const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Mutation: {
        reservation: async (parent, args) => {
            const headers = {
                'Content-Type': 'application/json'
            }
            const adresse = cms + 'reservations?token=' + tokenSite
            const params = {
                user: args.userId,
                nom: args.nom || "",
                prenom: args.prenom,
                machine: args.machine
            }
            ajoutReservation = await axios.post(adresse, params, headers)
                .then((retour) => {return retour.data})
                .catch((erreur) => console.log('erreur', erreur))
            let retourOK = false
            if (ajoutReservation.id) {
                retourOK = true
            }
            return {
                estReserve: retourOK
            }
        }
    }
}

module.exports = resolvers;