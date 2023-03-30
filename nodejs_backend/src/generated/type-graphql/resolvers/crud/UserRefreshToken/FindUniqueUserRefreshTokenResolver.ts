import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserRefreshTokenArgs } from "./args/FindUniqueUserRefreshTokenArgs";
import { UserRefreshToken } from "../../../models/UserRefreshToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRefreshToken)
export class FindUniqueUserRefreshTokenResolver {
  @TypeGraphQL.Query(_returns => UserRefreshToken, {
    nullable: true
  })
  async userRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserRefreshTokenArgs): Promise<UserRefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
