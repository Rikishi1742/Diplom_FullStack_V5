import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("PartnerScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PartnerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PartnerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PartnerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PartnerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PartnerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  logo?: StringNullableWithAggregatesFilter | undefined;
}
