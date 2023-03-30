import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRefreshTokenWhereInput } from "../../../inputs/UserRefreshTokenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserRefreshTokenArgs {
  @TypeGraphQL.Field(_type => UserRefreshTokenWhereInput, {
    nullable: true
  })
  where?: UserRefreshTokenWhereInput | undefined;
}
