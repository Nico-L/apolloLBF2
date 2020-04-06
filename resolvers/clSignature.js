var crypto = require("crypto");
const api_secret = process.env.CLOUDINARY_KEY;

const resolvers = {
  Query: {
    clSignature: async (parent, args) => {
      var shasum = crypto.createHash("sha1");
      shasum.update(args.to_sign + api_secret, "binary");
      const retour = shasum.digest("hex");
      return {
        signature: retour
      };
    }
  }
};

module.exports = resolvers;
