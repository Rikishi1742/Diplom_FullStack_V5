import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserPasswordTypeCreateInput } from "../inputs/UserPasswordTypeCreateInput";
import { UserPasswordTypeUpdateInput } from "../inputs/UserPasswordTypeUpdateInput";

@TypeGraphQL.InputType("UserPasswordTypeUpsertInput", {
  isAbstract: true
})
export class UserPasswordTypeUpsertInput {
  @TypeGraphQL.Field(_type => UserPasswordTypeCreateInput, {
    nullable: false
  })
  set!: UserPasswordTypeCreateInput;

  @TypeGraphQL.Field(_type => UserPasswordTypeUpdateInput, {
    nullable: false
  })
  update!: UserPasswordTypeUpdateInput;
}
