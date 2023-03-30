import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRefreshTokenCreateInput } from "../../../inputs/UserRefreshTokenCreateInput";
import { UserRefreshTokenUpdateInput } from "../../../inputs/UserRefreshTokenUpdateInput";
import { UserRefreshTokenWhereUniqueInput } from "../../../inputs/UserRefreshTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserRefreshTokenArgs {
  @TypeGraphQL.Field(_type => UserRefreshTokenWhereUniqueInput, {
    nullable: false
  })
  where!: UserRefreshTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserRefreshTokenCreateInput, {
    nullable: false
  })
  create!: UserRefreshTokenCreateInput;

  @TypeGraphQL.Field(_type => UserRefreshTokenUpdateInput, {
    nullable: false
  })
  update!: UserRefreshTokenUpdateInput;
}
