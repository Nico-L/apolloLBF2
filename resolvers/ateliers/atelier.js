const axios = require('axios');
const tokenSite = process.env.TOKEN_SITE
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Query: {
        atelier: async (parent, args) => {
            const adresse = cms + args.id + '?token=' + tokenSite
            atelier = await axios.get(adresse)
            .then(response => {
                // Handle success.
                //console.log("retour", response.data)
                return response.data
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
            return {
                detailsAtelier: JSON.stringify(atelier)
            }
        }
    }
}

module.exports = resolvers;