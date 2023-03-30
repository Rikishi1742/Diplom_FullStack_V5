import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserRefreshTokenArgs } from "./args/AggregateUserRefreshTokenArgs";
import { CreateManyUserRefreshTokenArgs } from "./args/CreateManyUserRefreshTokenArgs";
import { CreateOneUserRefreshTokenArgs } from "./args/CreateOneUserRefreshTokenArgs";
import { DeleteManyUserRefreshTokenArgs } from "./args/DeleteManyUserRefreshTokenArgs";
import { DeleteOneUserRefreshTokenArgs } from "./args/DeleteOneUserRefreshTokenArgs";
import { FindFirstUserRefreshTokenArgs } from "./args/FindFirstUserRefreshTokenArgs";
import { FindFirstUserRefreshTokenOrThrowArgs } from "./args/FindFirstUserRefreshTokenOrThrowArgs";
import { FindManyUserRefreshTokenArgs } from "./args/FindManyUserRefreshTokenArgs";
import { FindUniqueUserRefreshTokenArgs } from "./args/FindUniqueUserRefreshTokenArgs";
import { FindUniqueUserRefreshTokenOrThrowArgs } from "./args/FindUniqueUserRefreshTokenOrThrowArgs";
import { GroupByUserRefreshTokenArgs } from "./args/GroupByUserRefreshTokenArgs";
import { UpdateManyUserRefreshTokenArgs } from "./args/UpdateManyUserRefreshTokenArgs";
import { UpdateOneUserRefreshTokenArgs } from "./args/UpdateOneUserRefreshTokenArgs";
import { UpsertOneUserRefreshTokenArgs } from "./args/UpsertOneUserRefreshTokenArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UserRefreshToken } from "../../../models/UserRefreshToken";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserRefreshToken } from "../../outputs/AggregateUserRefreshToken";
import { UserRefreshTokenGroupBy } from "../../outputs/UserRefreshTokenGroupBy";

@TypeGraphQL.Resolver(_of => UserRefreshToken)
export class UserRefreshTokenCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUserRefreshToken, {
    nullable: false
  })
  async aggregateUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserRefreshTokenArgs): Promise<AggregateUserRefreshToken> {
    return getPrismaFromContext(ctx).userRefreshToken.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUserRefreshTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserRefreshToken, {
    nullable: false
  })
  async createOneUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUserRefreshTokenArgs): Promise<UserRefreshToken> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUserRefreshTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => UserRefreshToken, {
    nullable: true
  })
  async findFirstUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUserRefreshTokenArgs): Promise<UserRefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [UserRefreshToken], {
    nullable: false
  })
  async userRefreshTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUserRefreshTokenArgs): Promise<UserRefreshToken[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUserRefreshTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserRefreshToken, {
    nullable: true
  })
  async updateOneUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserRefreshTokenArgs): Promise<UserRefreshToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UserRefreshToken, {
    nullable: false
  })
  async upsertOneUserRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserRefreshTokenArgs): Promise<UserRefreshToken> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userRefreshToken.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
