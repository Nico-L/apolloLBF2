const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Mutation: {
        ModifReservation: async (parent, args) => {
            const headers = {
                'Content-Type': 'application/json'
            }
            const adresse = cms + 'reservations-machines/' + args.idReservation + '?token=' + tokenSite
            const params = {
                heuredebut: args.heureDebut,
                heurefin: args.heureFin,
                nom: args.nom,
                prenom: args.prenom,
                machine: args.machine,
                user: args.user,
                date: new Date(args.date),
                uuid: args.uuid
            }
            ajoutReservation = await axios.put(adresse, params, headers)
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