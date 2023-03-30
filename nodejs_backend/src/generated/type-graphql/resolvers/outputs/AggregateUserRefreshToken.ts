import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserRefreshTokenCountAggregate } from "../outputs/UserRefreshTokenCountAggregate";
import { UserRefreshTokenMaxAggregate } from "../outputs/UserRefreshTokenMaxAggregate";
import { UserRefreshTokenMinAggregate } from "../outputs/UserRefreshTokenMinAggregate";

@TypeGraphQL.ObjectType("AggregateUserRefreshToken", {
  isAbstract: true
})
export class AggregateUserRefreshToken {
  @TypeGraphQL.Field(_type => UserRefreshTokenCountAggregate, {
    nullable: true
  })
  _count!: UserRefreshTokenCountAggregate | null;

  @TypeGraphQL.Field(_type => UserRefreshTokenMinAggregate, {
    nullable: true
  })
  _min!: UserRefreshTokenMinAggregate | null;

  @TypeGraphQL.Field(_type => UserRefreshTokenMaxAggregate, {
    nullable: true
  })
  _max!: UserRefreshTokenMaxAggregate | null;
}
