import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRefreshTokenCreateManyInput } from "../../../inputs/UserRefreshTokenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserRefreshTokenArgs {
  @TypeGraphQL.Field(_type => [UserRefreshTokenCreateManyInput], {
    nullable: false
  })
  data!: UserRefreshTokenCreateManyInput[];
}
