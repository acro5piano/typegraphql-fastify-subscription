import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

export const types = {
  STATUS_CHANGED: 'STATUS_CHANGED',
}

/*
 * Simulate event
 */
let count = 0
setInterval(() => {
  count++
  const status = count % 2 === 0 ? 'online' : 'offline'
  pubsub.publish(types.STATUS_CHANGED, { status })
}, 1500)
