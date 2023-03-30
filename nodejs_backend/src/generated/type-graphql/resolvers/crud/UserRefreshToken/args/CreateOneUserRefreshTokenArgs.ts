import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRefreshTokenCreateInput } from "../../../inputs/UserRefreshTokenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserRefreshTokenArgs {
  @TypeGraphQL.Field(_type => UserRefreshTokenCreateInput, {
    nullable: false
  })
  data!: UserRefreshTokenCreateInput;
}
