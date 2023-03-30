import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserPasswordTypeCreateInput } from "../inputs/UserPasswordTypeCreateInput";

@TypeGraphQL.InputType("UserPasswordTypeNullableCreateEnvelopeInput", {
  isAbstract: true
})
export class UserPasswordTypeNullableCreateEnvelopeInput {
  @TypeGraphQL.Field(_type => UserPasswordTypeCreateInput, {
    nullable: true
  })
  set?: UserPasswordTypeCreateInput | undefined;
}
