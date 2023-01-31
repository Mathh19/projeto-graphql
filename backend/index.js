const { ApolloServer } = require('apollo-server');
require('dotenv').config();

const resolvers = require('./resolvers');
const context = require('./config/context');
const typeDefs = require('./graphql/typeDefs');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
});

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
});
