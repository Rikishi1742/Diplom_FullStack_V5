import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserRefreshTokenArgs } from "./args/DeleteOneUserRefreshTokenArgs";
import { UserRefreshToken } from "../../../models/UserRefreshToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRefreshToken)
export class DeleteOneUserRefreshTokenResolver {
  @TypeGraphQL.Mutation(_returns => UserRefreshToken, {
    nullable: true
  })
  async deleteOneUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserRefreshTokenArgs): Promise<UserRefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
