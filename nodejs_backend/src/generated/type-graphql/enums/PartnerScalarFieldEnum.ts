import * as TypeGraphQL from "type-graphql";

export enum PartnerScalarFieldEnum {
  id = "id",
  name = "name",
  logo = "logo"
}
TypeGraphQL.registerEnumType(PartnerScalarFieldEnum, {
  name: "PartnerScalarFieldEnum",
  description: undefined,
});
