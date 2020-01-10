const credentials = {
  client: {
    id: "MP1S3ZA3OQsYzEh1nuHis7IzSVv61YuQHu1i9lbx5d8tCYpWVsIPm8jQHozXNlIm",
    secret: "ZCRtxpJRMJKxhMTpF1WKB8xGiYmULw6rGBIk0A644LubBY18Q7vmrDnyCon2CObR"
  },
  auth: {
    tokenHost:
      "https://cloud.labonnefabrique.fr/index.php/apps/oauth2/authorize"
  }
};

// Initialize the OAuth2 Library
const oauth2 = require("simple-oauth2").create(credentials);

const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: "https://tglzc.sse.codesandbox.io/login",
  scope: "profile", // also can be an array of multiple scopes, ex. ['<scope1>, '<scope2>', '...']
  state: "123quasar"
});

console.log("uri", authorizationUri);

const resolvers = {
  Query: {
    nextcloudAuth: () => {
      return {
        message: "ohé bob !"
      };
    }
  }
};

module.exports = resolvers;
