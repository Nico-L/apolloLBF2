const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Query: {
        userData: async (parent, args) => {
            const headers = {
                'Content-Type': 'application/json'
            }
            const adresse = cms +'users?email=' + args.email + '&token=' + tokenSite
            user = await axios.get(adresse, headers)
                .then((retour) => {return retour.data})
                .catch((error) => console.log('erreur userData', error))
            let userData = {}
            if (user[0]) {
                let u = user[0]
                userData.id = u.id
                userData.abonnement = u.abonnementMachine
                userData.cnc = u.cnc
                userData.laser = u.laser
                userData.scie_toupie = u.scie_toupie
                userData.rabo_degau = u.rabo_degau
            }
            return {
                userData: JSON.stringify(userData)
            }
        }
    }
}

module.exports = resolvers;