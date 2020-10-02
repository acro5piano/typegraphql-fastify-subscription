/*
 * Plain graphql-js implementation
 */

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {pubsub, types} from './pubsub'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
  subscription: new GraphQLObjectType({
    name: 'RootSubscriptionType',
    fields: {
      status: {
        type: GraphQLString,
        subscribe() {
          return pubsub.asyncIterator(types.STATUS_CHANGED)
        },
      },
    },
  }),
});
