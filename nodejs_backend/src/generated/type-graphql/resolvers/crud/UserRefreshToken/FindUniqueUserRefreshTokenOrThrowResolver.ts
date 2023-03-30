import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserRefreshTokenOrThrowArgs } from "./args/FindUniqueUserRefreshTokenOrThrowArgs";
import { UserRefreshToken } from "../../../models/UserRefreshToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRefreshToken)
export class FindUniqueUserRefreshTokenOrThrowResolver {
  @TypeGraphQL.Query(_returns => UserRefreshToken, {
    nullable: true
  })
  async getUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUserRefreshTokenOrThrowArgs): Promise<UserRefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
