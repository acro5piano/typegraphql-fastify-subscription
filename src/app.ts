import "reflect-metadata"
import { SubscriptionServer } from "subscriptions-transport-ws"
import { execute, subscribe } from "graphql"

// import { schema } from "./plain-js-schema"
import { schema } from "./typegraphql-schema"

const subscriptionServer = SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    host: "0.0.0.0",
    port: 8000,
    path: "/subscriptions",
  },
)
