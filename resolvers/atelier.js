const axios = require('axios');

const resolvers = {
    Query: {
        atelier: async (parent, args) => {
            const adresse = 'http://cms.labonnefabrique.fr/ateliers/' + args.id
            atelier = await axios.get(adresse, {
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
                detailsAtelier: JSON.stringify(atelier)
            }
        }
    }
}

module.exports = resolvers;