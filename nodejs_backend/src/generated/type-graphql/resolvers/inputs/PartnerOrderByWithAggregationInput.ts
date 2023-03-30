import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PartnerCountOrderByAggregateInput } from "../inputs/PartnerCountOrderByAggregateInput";
import { PartnerMaxOrderByAggregateInput } from "../inputs/PartnerMaxOrderByAggregateInput";
import { PartnerMinOrderByAggregateInput } from "../inputs/PartnerMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PartnerOrderByWithAggregationInput", {
  isAbstract: true
})
export class PartnerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  logo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PartnerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PartnerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PartnerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PartnerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PartnerMinOrderByAggregateInput | undefined;
}
