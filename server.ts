import { readFileSync } from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers/resolvers';

const typeDefs = readFileSync(
	path.join(__dirname, './schema/schema.graphql'),
	'utf-8'
);

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen({ port: 3000 }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
