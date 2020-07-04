const axios = require('axios');
const identifier = process.env.STRAPI_LOGIN
const password = process.env.STRAPI_MDP

const resolvers = {
    Query: {
        siteLogin: async (parent, args) => {
            token = await axios.post('http://cms.labonnefabrique.fr/auth/local', {
                identifier: identifier,
                password: password,
            })
            .then(response => {
                // Handle success.
                return response.data.jwt
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
            return {
                loginToken: token
            }
        }
    }
}

module.exports = resolvers;