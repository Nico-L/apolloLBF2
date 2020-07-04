var cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const resolvers = {
  Query: {
    effaceImage: async (parent, args) => {
      let retour = await cloudinary.v2.uploader.destroy(args.imageId, function(
        error,
        result
      ) {
          console.log('result', result)
        return result.result;
      });
      return {
        message: retour.result
      };
    }
  }
};

module.exports = resolvers;
