import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserRefreshTokenCountOrderByAggregateInput } from "../inputs/UserRefreshTokenCountOrderByAggregateInput";
import { UserRefreshTokenMaxOrderByAggregateInput } from "../inputs/UserRefreshTokenMaxOrderByAggregateInput";
import { UserRefreshTokenMinOrderByAggregateInput } from "../inputs/UserRefreshTokenMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserRefreshTokenOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserRefreshTokenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserRefreshTokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserRefreshTokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserRefreshTokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserRefreshTokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserRefreshTokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserRefreshTokenMinOrderByAggregateInput | undefined;
}
