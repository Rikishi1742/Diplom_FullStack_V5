import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRefreshTokenWhereUniqueInput } from "../../../inputs/UserRefreshTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUserRefreshTokenArgs {
  @TypeGraphQL.Field(_type => UserRefreshTokenWhereUniqueInput, {
    nullable: false
  })
  where!: UserRefreshTokenWhereUniqueInput;
}
