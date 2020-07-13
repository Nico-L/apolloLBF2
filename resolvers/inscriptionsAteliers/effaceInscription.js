const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Mutation: {
        effaceInscription: async (parent, args) => {
            const adresse = cms + 'Inscriptions-Ateliers/' + args.idInscription + '?token=' + tokenSite
            ajoutInscription = await axios.delete(adresse)
                .then((retour) => {return retour.data.id})
                .catch((erreur) => console.log('erreur', erreur))
            return {
                inscription: ajoutInscription
            }
        }
    }
}

module.exports = resolvers;