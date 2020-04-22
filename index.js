const { ApolloServer } = require("apollo-server");
const GraphQLHelper = require("./helpers/graphql");
const fetch = require('node-fetch');
const CronJob = require('cron').CronJob;

const job = new CronJob('00 00 00 * * *', function() {
    fetch(process.env.HOOK_ATELIER, {
        method: 'POST',
        headers: {},
        body: ''
      })
});

job.start();

const server = new ApolloServer({
  typeDefs: GraphQLHelper.typeDefs,
  schemaDirectives: GraphQLHelper.schemaDirectives,
  resolvers: GraphQLHelper.resolvers,
  dataSources: () => GraphQLHelper.dataSources
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
