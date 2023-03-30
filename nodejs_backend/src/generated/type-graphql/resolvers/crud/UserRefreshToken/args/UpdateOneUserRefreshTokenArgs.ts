import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRefreshTokenUpdateInput } from "../../../inputs/UserRefreshTokenUpdateInput";
import { UserRefreshTokenWhereUniqueInput } from "../../../inputs/UserRefreshTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserRefreshTokenArgs {
  @TypeGraphQL.Field(_type => UserRefreshTokenUpdateInput, {
    nullable: false
  })
  data!: UserRefreshTokenUpdateInput;

  @TypeGraphQL.Field(_type => UserRefreshTokenWhereUniqueInput, {
    nullable: false
  })
  where!: UserRefreshTokenWhereUniqueInput;
}
