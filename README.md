# typegraphql-fastify-subscription

Demo of TypeGraphQL + Fastify + subscriptions-transport-ws

# Setup

```
yarn install
yarn start
```


# Why

I couldn't find any example with:

- No Apollo server
- No Express

Turned out things are very simple. Just pass `schema` to `subscriptions-transport-ws`.
