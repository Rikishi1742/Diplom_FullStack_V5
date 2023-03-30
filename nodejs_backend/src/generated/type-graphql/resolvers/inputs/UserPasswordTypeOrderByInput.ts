import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserPasswordTypeOrderByInput", {
  isAbstract: true
})
export class UserPasswordTypeOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  initialPassword?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;
}
