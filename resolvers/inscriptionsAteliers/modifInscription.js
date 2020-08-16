const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Mutation: {
        modifInscription: async (parent, args) => {
            const dataInscription = JSON.parse(args.inscription)
            const params = {
                email: dataInscription.email,
                lesInscrits: dataInscription.lesInscrits,
                atelier: dataInscription.idAtelier
            }
            const headers = {
                'Content-Type': 'application/json'
                }
            const adresse = cms + 'Inscriptions-Ateliers/' + args.idInscription + '?token=' + tokenSite
            ajoutInscription = await axios.put(adresse, params)
                .then((retour) => {return retour.data.uuid})
                .catch((erreur) => console.log('erreur', erreur))
            return {
                idInscription: ajoutInscription
            }
        }
    }
}

module.exports = resolvers;