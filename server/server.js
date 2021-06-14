const { GraphQLServer, PubSub } = require("graphql-yoga");
require("./core/database")

const typeDefs = require("./graphql/typedefs")
const resolvers = require("./graphql/resolvers")

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
server.start(({ port }) => {
  console.log(`Server on http://localhost:${port}/`);
});
