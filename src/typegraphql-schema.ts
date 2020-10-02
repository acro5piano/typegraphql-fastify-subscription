import { buildSchemaSync } from "type-graphql"
import {
  Arg,
  PubSub,
  PubSubEngine,
  ID,
  Ctx,
  Query,
  Resolver,
  Subscription,
} from "type-graphql"
import { pubSub, types } from "./pubSub"

@Resolver()
export class MyResolver {
  @Query(() => String)
  async hello(@PubSub() pubsub: PubSubEngine) {
    // You can inject pubsub engine here
    await pubsub.publish(types.STATUS_CHANGED, { status: "away" })
    return "world"
  }

  @Subscription({ topics: types.STATUS_CHANGED })
  status(): string {
    return "online"
  }
}

export const schema = buildSchemaSync({
  resolvers: [MyResolver],
  emitSchemaFile: true,
  pubSub,
})
