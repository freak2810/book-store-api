import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import { buildSchema, Query, Resolver } from 'type-graphql';
import 'reflect-metadata';

@Resolver()
class HelloWorldResolver {
	@Query(() => String, { name: 'helloWorld' })
	async hello() {
		return 'Hello World!';
	}
}

const main = async () => {
	const schema = await buildSchema({
		resolvers: [HelloWorldResolver],
	});

	const server = new ApolloServer({ schema });

	const app = express();

	await server.start();

	server.applyMiddleware({ app });

	app.listen(4000, () =>
		console.log('Server started 🚀 on http://localhost:4000/graphql')
	);
};
main();
