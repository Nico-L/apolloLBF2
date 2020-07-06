const axios = require('axios');

const resolvers = {
    Query: {
        ajoutInscription: async (parent, args) => {
            console.log(JSON.parse(args.inscription).email)
            const dataInscription = JSON.parse(args.inscription)
            const params = {
                email: dataInscription.email,
                lesInscrits: dataInscription.lesInscrits,
                atelier: dataInscription.idAtelier
            }
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${args.token}`
                }
            const adresse = 'http://cms.labonnefabrique.fr/Inscriptions-Ateliers'
            ajoutInscription = await axios.post(adresse, params, {headers: headers})
                .then((retour) => {return retour.data.id})
                .catch((erreur) => console.log('erreur', erreur))
            return {
                idInscription: ajoutInscription
            }
        }
    }
}

module.exports = resolvers;