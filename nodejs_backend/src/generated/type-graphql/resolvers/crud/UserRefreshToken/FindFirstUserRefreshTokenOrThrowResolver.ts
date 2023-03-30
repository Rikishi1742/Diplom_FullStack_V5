import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserRefreshTokenOrThrowArgs } from "./args/FindFirstUserRefreshTokenOrThrowArgs";
import { UserRefreshToken } from "../../../models/UserRefreshToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRefreshToken)
export class FindFirstUserRefreshTokenOrThrowResolver {
  @TypeGraphQL.Query(_returns => UserRefreshToken, {
    nullable: true
  })
  async findFirstUserRefreshTokenOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserRefreshTokenOrThrowArgs): Promise<UserRefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
