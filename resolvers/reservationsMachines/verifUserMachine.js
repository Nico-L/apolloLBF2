const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE

const resolvers = {
    Query: {
        VerifUSerMachine: async (parent, args) => {
            const headers = {
                'Content-Type': 'application/json'
            }
            const adresse = 'https://cms.labonnefabrique.fr/users?email=' + args.email + '&' + args.machine + '=true&token=' + tokenSite
            console.log('adresse', adresse)
            user = await axios.get(adresse, headers)
                .then((retour) => {return retour.data})
                .catch((error) => console.log('erreur findeUserMachine', error))
            let userId="-1"
            if (user[0] && user[0].id) {
                userId = user[0].id
            }
            return {
                userId: userId
            }
        }
    }
}

module.exports = resolvers;