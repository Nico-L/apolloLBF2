const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API);

const resolvers = {
  Mutation: {
    sendEmail: async (parent, args) => {
      const msg = {
        from: args.from,
        to: args.to,
        templateId: args.templateId,
        dynamic_template_data: JSON.parse(args.dynamic_template_data)
      };
      sgMail
        .send(msg)
        .then(() => {
          //Celebrate
          return {
            success: true
          };
        })
        .catch(error => {
          //Log friendly error
          console.error(error.toString());

          //Extract error msg
          const {message, code, response} = error;

          //Extract response msg
          const {headers, body} = response;
          return {
            success: false
          };
        });
      /*mg.messages().send(data, function(error, body) {
        console.log(body.message);
        if (body.message.search("Queued") >= 0) {
          console.log("OK, envoyé");
          return {
            success: true
          };
        } else {
          return {
            success: false
          };
        }
      }); */
    }
  }
};

module.exports = resolvers;
