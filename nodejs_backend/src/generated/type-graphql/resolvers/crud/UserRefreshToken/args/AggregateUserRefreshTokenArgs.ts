import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRefreshTokenOrderByWithRelationInput } from "../../../inputs/UserRefreshTokenOrderByWithRelationInput";
import { UserRefreshTokenWhereInput } from "../../../inputs/UserRefreshTokenWhereInput";
import { UserRefreshTokenWhereUniqueInput } from "../../../inputs/UserRefreshTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserRefreshTokenArgs {
  @TypeGraphQL.Field(_type => UserRefreshTokenWhereInput, {
    nullable: true
  })
  where?: UserRefreshTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserRefreshTokenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserRefreshTokenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRefreshTokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserRefreshTokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
