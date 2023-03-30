import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UserRefreshTokenWhereInput", {
  isAbstract: true
})
export class UserRefreshTokenWhereInput {
  @TypeGraphQL.Field(_type => [UserRefreshTokenWhereInput], {
    nullable: true
  })
  AND?: UserRefreshTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRefreshTokenWhereInput], {
    nullable: true
  })
  OR?: UserRefreshTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRefreshTokenWhereInput], {
    nullable: true
  })
  NOT?: UserRefreshTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  user_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;
}
