import { buildSchemaSync } from "type-graphql"
import { Arg, ID, Ctx, Query, Resolver, Subscription } from "type-graphql"
import { pubsub, types } from "./pubsub"

@Resolver()
export class MyResolver {
  @Query()
  hello(): string {
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
  pubSub: pubsub,
})
