import { Resolvers } from '../schema/graphql.generated';

const resolvers: Resolvers = {
	Query: {
		helloWorld: () => 'Hello World!',
	},
};

export default resolvers;
