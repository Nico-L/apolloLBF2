const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE

const resolvers = {
    Query: {
        VerifUSerAbonnement: async (parent, args) => {
            const headers = {
                'Content-Type': 'application/json'
            }
            const adresse = 'https://cms.labonnefabrique.fr/users?email=' + args.email + '&token=' + tokenSite
            findUser = await axios.get(adresse, headers)
                .then((retour) => {return retour.data})
                .catch((error) => console.log('erreur findeUserMachine', error))
            let estAbonne = false
            if (findUser[0] && findUser[0].abonnementMachine) {
                const now = new Date();
                const finAbonnement = new Date(findUser[0].abonnementMachine);
                estAbonne = finAbonnement > now
            }
            return {
                estAbonne: estAbonne
            }
        }
    }
}

module.exports = resolvers;