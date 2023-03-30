import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRefreshTokenUpdateManyMutationInput } from "../../../inputs/UserRefreshTokenUpdateManyMutationInput";
import { UserRefreshTokenWhereInput } from "../../../inputs/UserRefreshTokenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserRefreshTokenArgs {
  @TypeGraphQL.Field(_type => UserRefreshTokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserRefreshTokenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserRefreshTokenWhereInput, {
    nullable: true
  })
  where?: UserRefreshTokenWhereInput | undefined;
}
