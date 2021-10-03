import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import 'reflect-metadata';

import { PrismaClient } from '@prisma/client';

interface Context {
	prisma: PrismaClient;
}

import {
	AuthorRelationsResolver,
	AuthorCrudResolver,
	BookRelationsResolver,
	BookCrudResolver,
} from './generated/typegraphql-prisma';

const prisma = new PrismaClient();

const main = async () => {
	const schema = await buildSchema({
		resolvers: [
			AuthorRelationsResolver,
			AuthorCrudResolver,
			BookRelationsResolver,
			BookCrudResolver,
		],
	});

	const server = new ApolloServer({
		schema,
		context: (): Context => ({ prisma }),
	});

	const app = express();

	await server.start();

	server.applyMiddleware({ app });

	app.listen(4000, () =>
		console.log('Server started 🚀 on http://localhost:4000/graphql')
	);
};

main();
