import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserPasswordTypeCreateInput } from "../inputs/UserPasswordTypeCreateInput";
import { UserPasswordTypeUpsertInput } from "../inputs/UserPasswordTypeUpsertInput";

@TypeGraphQL.InputType("UserPasswordTypeNullableUpdateEnvelopeInput", {
  isAbstract: true
})
export class UserPasswordTypeNullableUpdateEnvelopeInput {
  @TypeGraphQL.Field(_type => UserPasswordTypeCreateInput, {
    nullable: true
  })
  set?: UserPasswordTypeCreateInput | undefined;

  @TypeGraphQL.Field(_type => UserPasswordTypeUpsertInput, {
    nullable: true
  })
  upsert?: UserPasswordTypeUpsertInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  unset?: boolean | undefined;
}
