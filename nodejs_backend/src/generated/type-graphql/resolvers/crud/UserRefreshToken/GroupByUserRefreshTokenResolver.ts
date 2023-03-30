import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserRefreshTokenArgs } from "./args/GroupByUserRefreshTokenArgs";
import { UserRefreshToken } from "../../../models/UserRefreshToken";
import { UserRefreshTokenGroupBy } from "../../outputs/UserRefreshTokenGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRefreshToken)
export class GroupByUserRefreshTokenResolver {
  @TypeGraphQL.Query(_returns => [UserRefreshTokenGroupBy], {
    nullable: false
  })
  async groupByUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserRefreshTokenArgs): Promise<UserRefreshTokenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
