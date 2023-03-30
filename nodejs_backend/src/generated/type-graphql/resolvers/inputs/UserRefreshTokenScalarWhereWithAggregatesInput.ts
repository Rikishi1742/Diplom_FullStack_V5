import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserRefreshTokenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserRefreshTokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserRefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserRefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserRefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserRefreshTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserRefreshTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;
}
