import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserPasswordTypeObjectEqualityInput } from "../inputs/UserPasswordTypeObjectEqualityInput";
import { UserPasswordTypeWhereInput } from "../inputs/UserPasswordTypeWhereInput";

@TypeGraphQL.InputType("UserPasswordTypeNullableCompositeFilter", {
  isAbstract: true
})
export class UserPasswordTypeNullableCompositeFilter {
  @TypeGraphQL.Field(_type => UserPasswordTypeObjectEqualityInput, {
    nullable: true
  })
  equals?: UserPasswordTypeObjectEqualityInput | undefined;

  @TypeGraphQL.Field(_type => UserPasswordTypeWhereInput, {
    nullable: true
  })
  is?: UserPasswordTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserPasswordTypeWhereInput, {
    nullable: true
  })
  isNot?: UserPasswordTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
