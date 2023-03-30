import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UserPasswordTypeWhereInput", {
  isAbstract: true
})
export class UserPasswordTypeWhereInput {
  @TypeGraphQL.Field(_type => [UserPasswordTypeWhereInput], {
    nullable: true
  })
  AND?: UserPasswordTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPasswordTypeWhereInput], {
    nullable: true
  })
  OR?: UserPasswordTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserPasswordTypeWhereInput], {
    nullable: true
  })
  NOT?: UserPasswordTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  initialPassword?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;
}
