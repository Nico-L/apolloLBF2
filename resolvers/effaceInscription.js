const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE

const resolvers = {
    Query: {
        effaceInscription: async (parent, args) => {
            const adresse = 'http://cms.labonnefabrique.fr/Inscriptions-Ateliers/' + args.idInscription + '?token=' + tokenSite
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