import { Resolvers } from '../schema/graphql.generated';

const resolvers: Resolvers = {
	Query: {
		helloWorld: () => 'Hello World!',
		book: () => [
			{
				__typename: 'Book',
				title: 'Harry Potter',
				description: 'A book about a wizard',
				genre: ['Fantasy', 'Adventure'],
				price: 45.99,
				rating: 0,
				yearOfPublication: 2000,
			},
		],
	},
};

export default resolvers;
