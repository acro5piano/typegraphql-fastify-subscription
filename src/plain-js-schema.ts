/*
 * Plain graphql-js implementation
 */

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {pubsub} from './pubsub'

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
          return pubsub.asyncIterator('status')
        },
      },
    },
  }),
});

let count = 0
setInterval(() => {
  count++
  const status = count % 2 === 0 ? 'online' : 'offline'
  pubsub.publish('status', { status })
}, 1500)
