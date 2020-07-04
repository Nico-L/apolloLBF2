const axios = require('axios');

const resolvers = {
    Query: {
        siteLogin: async (parent, args) => {
            token = await axios.post('http://cms.labonnefabrique.fr/auth/local', {
                identifier: args.username,
                password: args.password,
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