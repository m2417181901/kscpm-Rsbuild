import { gql } from 'overlord-server';
import { printSchema } from 'graphql';
import { buildSchemaSync, createResolversMap } from 'type-graphql';
import { Resolvers as DemoInfo } from './graphql/demo/resolvers';

const schema = buildSchemaSync({
    resolvers: [DemoInfo],
});
export const typeDefs = gql(printSchema(schema));
export const resolvers = createResolversMap(schema);
