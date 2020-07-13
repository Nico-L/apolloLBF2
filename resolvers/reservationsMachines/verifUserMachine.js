const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Query: {
        VerifUSerMachine: async (parent, args) => {
            const headers = {
                'Content-Type': 'application/json'
            }
            const adresse = cms +'users?email=' + args.email + '&' + args.machine + '=true&token=' + tokenSite
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