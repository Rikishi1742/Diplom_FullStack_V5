import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PartnerWhereInput", {
  isAbstract: true
})
export class PartnerWhereInput {
  @TypeGraphQL.Field(_type => [PartnerWhereInput], {
    nullable: true
  })
  AND?: PartnerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereInput], {
    nullable: true
  })
  OR?: PartnerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PartnerWhereInput], {
    nullable: true
  })
  NOT?: PartnerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  logo?: StringNullableFilter | undefined;
}
