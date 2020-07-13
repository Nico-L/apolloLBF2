const axios = require('axios');
const identifier = process.env.STRAPI_LOGIN
const password = process.env.STRAPI_MDP
const cms = process.env.ADRESSE_CMS

const resolvers = {
    Query: {
        siteLogin: async (parent, args) => {
            token = await axios.post(cms + 'auth/local', {
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