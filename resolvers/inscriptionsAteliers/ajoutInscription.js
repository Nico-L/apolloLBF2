const axios = require('axios');
const uuid = require('uuid')
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Mutation: {
        ajoutInscription: async (parent, args) => {
            const dataInscription = JSON.parse(args.inscription)
            const params = {
                email: dataInscription.email,
                lesInscrits: dataInscription.lesInscrits,
                atelier: dataInscription.idAtelier,
                uuid: uuid()
            }
            const headers = {
                'Content-Type': 'application/json'
                }
            const adresse = cms + 'Inscriptions-Ateliers?token=' + tokenSite
            ajoutInscription = await axios.post(adresse, params)
                .then((retour) => {return retour.data.uuid})
                .catch((erreur) => console.log('erreur', erreur))
            return {
                uuid: ajoutInscription
            }
        }
    }
}

module.exports = resolvers;