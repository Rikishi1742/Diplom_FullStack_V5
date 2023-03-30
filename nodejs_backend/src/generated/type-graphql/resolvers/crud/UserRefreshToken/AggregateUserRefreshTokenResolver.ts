import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserRefreshTokenArgs } from "./args/AggregateUserRefreshTokenArgs";
import { UserRefreshToken } from "../../../models/UserRefreshToken";
import { AggregateUserRefreshToken } from "../../outputs/AggregateUserRefreshToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRefreshToken)
export class AggregateUserRefreshTokenResolver {
  @TypeGraphQL.Query(_returns => AggregateUserRefreshToken, {
    nullable: false
  })
  async aggregateUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserRefreshTokenArgs): Promise<AggregateUserRefreshToken> {
    return getPrismaFromContext(ctx).userRefreshToken.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
