const axios = require('axios');

const resolvers = {
    Query: {
        findOneInscrit: async (parent, args) => {
            const adresse = 'http://cms.labonnefabrique.fr/Inscriptions-Ateliers?atelier.id_eq=' + args.id + '&email_eq=' + args.email
            inscrit = await axios.get(adresse, {
                headers: {
                    Authorization: `Bearer ${args.token}`,
                    },
            })
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
                inscrit: JSON.stringify(inscrit)
            }
        }
    }
}

module.exports = resolvers;