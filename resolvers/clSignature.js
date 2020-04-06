var crypto = require("crypto");
const api_secret = process.env.CLOUDINARY_API_KEY;

const resolvers = {
  Query: {
    clSignature: async (parent, args) => {
      console.log("args", args);
      var shasum = crypto.createHash("sha1");
      shasum.update(args.to_sign + api_secret, "binary");
      const retour = shasum.digest("hex");
      /*let retour = await cloudinary.v2.uploader.destroy(
        args.toSign,
        api_secret
      ); */
      return {
        signature: retour
      };
    }
  }
};

module.exports = resolvers;
