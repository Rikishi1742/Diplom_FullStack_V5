import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  UserRefreshToken: crudResolvers.UserRefreshTokenCrudResolver,
  Partner: crudResolvers.PartnerCrudResolver,
  Project: crudResolvers.ProjectCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  UserRefreshToken: {
    aggregateUserRefreshToken: actionResolvers.AggregateUserRefreshTokenResolver,
    createManyUserRefreshToken: actionResolvers.CreateManyUserRefreshTokenResolver,
    createOneUserRefreshToken: actionResolvers.CreateOneUserRefreshTokenResolver,
    deleteManyUserRefreshToken: actionResolvers.DeleteManyUserRefreshTokenResolver,
    deleteOneUserRefreshToken: actionResolvers.DeleteOneUserRefreshTokenResolver,
    findFirstUserRefreshToken: actionResolvers.FindFirstUserRefreshTokenResolver,
    findFirstUserRefreshTokenOrThrow: actionResolvers.FindFirstUserRefreshTokenOrThrowResolver,
    userRefreshTokens: actionResolvers.FindManyUserRefreshTokenResolver,
    userRefreshToken: actionResolvers.FindUniqueUserRefreshTokenResolver,
    getUserRefreshToken: actionResolvers.FindUniqueUserRefreshTokenOrThrowResolver,
    groupByUserRefreshToken: actionResolvers.GroupByUserRefreshTokenResolver,
    updateManyUserRefreshToken: actionResolvers.UpdateManyUserRefreshTokenResolver,
    updateOneUserRefreshToken: actionResolvers.UpdateOneUserRefreshTokenResolver,
    upsertOneUserRefreshToken: actionResolvers.UpsertOneUserRefreshTokenResolver
  },
  Partner: {
    aggregatePartner: actionResolvers.AggregatePartnerResolver,
    createManyPartner: actionResolvers.CreateManyPartnerResolver,
    createOnePartner: actionResolvers.CreateOnePartnerResolver,
    deleteManyPartner: actionResolvers.DeleteManyPartnerResolver,
    deleteOnePartner: actionResolvers.DeleteOnePartnerResolver,
    findFirstPartner: actionResolvers.FindFirstPartnerResolver,
    findFirstPartnerOrThrow: actionResolvers.FindFirstPartnerOrThrowResolver,
    partners: actionResolvers.FindManyPartnerResolver,
    partner: actionResolvers.FindUniquePartnerResolver,
    getPartner: actionResolvers.FindUniquePartnerOrThrowResolver,
    groupByPartner: actionResolvers.GroupByPartnerResolver,
    updateManyPartner: actionResolvers.UpdateManyPartnerResolver,
    updateOnePartner: actionResolvers.UpdateOnePartnerResolver,
    upsertOnePartner: actionResolvers.UpsertOnePartnerResolver
  },
  Project: {
    aggregateProject: actionResolvers.AggregateProjectResolver,
    createManyProject: actionResolvers.CreateManyProjectResolver,
    createOneProject: actionResolvers.CreateOneProjectResolver,
    deleteManyProject: actionResolvers.DeleteManyProjectResolver,
    deleteOneProject: actionResolvers.DeleteOneProjectResolver,
    findFirstProject: actionResolvers.FindFirstProjectResolver,
    findFirstProjectOrThrow: actionResolvers.FindFirstProjectOrThrowResolver,
    projects: actionResolvers.FindManyProjectResolver,
    project: actionResolvers.FindUniqueProjectResolver,
    getProject: actionResolvers.FindUniqueProjectOrThrowResolver,
    groupByProject: actionResolvers.GroupByProjectResolver,
    updateManyProject: actionResolvers.UpdateManyProjectResolver,
    updateOneProject: actionResolvers.UpdateOneProjectResolver,
    upsertOneProject: actionResolvers.UpsertOneProjectResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  UserRefreshToken: ["aggregateUserRefreshToken", "createManyUserRefreshToken", "createOneUserRefreshToken", "deleteManyUserRefreshToken", "deleteOneUserRefreshToken", "findFirstUserRefreshToken", "findFirstUserRefreshTokenOrThrow", "userRefreshTokens", "userRefreshToken", "getUserRefreshToken", "groupByUserRefreshToken", "updateManyUserRefreshToken", "updateOneUserRefreshToken", "upsertOneUserRefreshToken"],
  Partner: ["aggregatePartner", "createManyPartner", "createOnePartner", "deleteManyPartner", "deleteOnePartner", "findFirstPartner", "findFirstPartnerOrThrow", "partners", "partner", "getPartner", "groupByPartner", "updateManyPartner", "updateOnePartner", "upsertOnePartner"],
  Project: ["aggregateProject", "createManyProject", "createOneProject", "deleteManyProject", "deleteOneProject", "findFirstProject", "findFirstProjectOrThrow", "projects", "project", "getProject", "groupByProject", "updateManyProject", "updateOneProject", "upsertOneProject"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateUserRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserRefreshTokenArgs: ["data"],
  CreateOneUserRefreshTokenArgs: ["data"],
  DeleteManyUserRefreshTokenArgs: ["where"],
  DeleteOneUserRefreshTokenArgs: ["where"],
  FindFirstUserRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserRefreshTokenOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserRefreshTokenArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserRefreshTokenArgs: ["where"],
  FindUniqueUserRefreshTokenOrThrowArgs: ["where"],
  GroupByUserRefreshTokenArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserRefreshTokenArgs: ["data", "where"],
  UpdateOneUserRefreshTokenArgs: ["data", "where"],
  UpsertOneUserRefreshTokenArgs: ["where", "create", "update"],
  AggregatePartnerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPartnerArgs: ["data"],
  CreateOnePartnerArgs: ["data"],
  DeleteManyPartnerArgs: ["where"],
  DeleteOnePartnerArgs: ["where"],
  FindFirstPartnerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPartnerOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPartnerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePartnerArgs: ["where"],
  FindUniquePartnerOrThrowArgs: ["where"],
  GroupByPartnerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPartnerArgs: ["data", "where"],
  UpdateOnePartnerArgs: ["data", "where"],
  UpsertOnePartnerArgs: ["where", "create", "update"],
  AggregateProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProjectArgs: ["data"],
  CreateOneProjectArgs: ["data"],
  DeleteManyProjectArgs: ["where"],
  DeleteOneProjectArgs: ["where"],
  FindFirstProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProjectOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProjectArgs: ["where"],
  FindUniqueProjectOrThrowArgs: ["where"],
  GroupByProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProjectArgs: ["data", "where"],
  UpdateOneProjectArgs: ["data", "where"],
  UpsertOneProjectArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "username", "roles", "email", "name", "password"],
  UserRefreshToken: ["user_id", "token"],
  Partner: ["id", "name", "logo"],
  Project: ["id", "name"],
  UserPasswordType: ["initialPassword", "password"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "username", "roles", "email", "name", "_count", "_min", "_max"],
  AggregateUserRefreshToken: ["_count", "_min", "_max"],
  UserRefreshTokenGroupBy: ["user_id", "token", "_count", "_min", "_max"],
  AggregatePartner: ["_count", "_min", "_max"],
  PartnerGroupBy: ["id", "name", "logo", "_count", "_min", "_max"],
  AggregateProject: ["_count", "_min", "_max"],
  ProjectGroupBy: ["id", "name", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "username", "roles", "email", "name", "_all"],
  UserMinAggregate: ["id", "username", "email", "name"],
  UserMaxAggregate: ["id", "username", "email", "name"],
  UserRefreshTokenCountAggregate: ["user_id", "token", "_all"],
  UserRefreshTokenMinAggregate: ["user_id", "token"],
  UserRefreshTokenMaxAggregate: ["user_id", "token"],
  PartnerCountAggregate: ["id", "name", "logo", "_all"],
  PartnerMinAggregate: ["id", "name", "logo"],
  PartnerMaxAggregate: ["id", "name", "logo"],
  ProjectCountAggregate: ["id", "name", "_all"],
  ProjectMinAggregate: ["id", "name"],
  ProjectMaxAggregate: ["id", "name"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "username", "roles", "email", "name", "password"],
  UserOrderByWithRelationInput: ["id", "username", "roles", "email", "name", "password"],
  UserWhereUniqueInput: ["id", "username"],
  UserOrderByWithAggregationInput: ["id", "username", "roles", "email", "name", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "username", "roles", "email", "name"],
  UserRefreshTokenWhereInput: ["AND", "OR", "NOT", "user_id", "token"],
  UserRefreshTokenOrderByWithRelationInput: ["user_id", "token"],
  UserRefreshTokenWhereUniqueInput: ["user_id", "token"],
  UserRefreshTokenOrderByWithAggregationInput: ["user_id", "token", "_count", "_max", "_min"],
  UserRefreshTokenScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "user_id", "token"],
  PartnerWhereInput: ["AND", "OR", "NOT", "id", "name", "logo"],
  PartnerOrderByWithRelationInput: ["id", "name", "logo"],
  PartnerWhereUniqueInput: ["id"],
  PartnerOrderByWithAggregationInput: ["id", "name", "logo", "_count", "_max", "_min"],
  PartnerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "logo"],
  ProjectWhereInput: ["AND", "OR", "NOT", "id", "name"],
  ProjectOrderByWithRelationInput: ["id", "name"],
  ProjectWhereUniqueInput: ["id"],
  ProjectOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  UserCreateInput: ["id", "username", "roles", "email", "name", "password"],
  UserUpdateInput: ["username", "roles", "email", "name", "password"],
  UserCreateManyInput: ["id", "username", "roles", "email", "name", "password"],
  UserUpdateManyMutationInput: ["username", "roles", "email", "name", "password"],
  UserRefreshTokenCreateInput: ["user_id", "token"],
  UserRefreshTokenUpdateInput: ["token"],
  UserRefreshTokenCreateManyInput: ["user_id", "token"],
  UserRefreshTokenUpdateManyMutationInput: ["token"],
  PartnerCreateInput: ["id", "name", "logo"],
  PartnerUpdateInput: ["name", "logo"],
  PartnerCreateManyInput: ["id", "name", "logo"],
  PartnerUpdateManyMutationInput: ["name", "logo"],
  ProjectCreateInput: ["id", "name"],
  ProjectUpdateInput: ["name"],
  ProjectCreateManyInput: ["id", "name"],
  ProjectUpdateManyMutationInput: ["name"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  UserPasswordTypeNullableCompositeFilter: ["equals", "is", "isNot", "isSet"],
  UserPasswordTypeObjectEqualityInput: ["initialPassword", "password"],
  UserPasswordTypeOrderByInput: ["initialPassword", "password"],
  UserCountOrderByAggregateInput: ["id", "username", "roles", "email", "name"],
  UserMaxOrderByAggregateInput: ["id", "username", "email", "name"],
  UserMinOrderByAggregateInput: ["id", "username", "email", "name"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
  UserRefreshTokenCountOrderByAggregateInput: ["user_id", "token"],
  UserRefreshTokenMaxOrderByAggregateInput: ["user_id", "token"],
  UserRefreshTokenMinOrderByAggregateInput: ["user_id", "token"],
  PartnerCountOrderByAggregateInput: ["id", "name", "logo"],
  PartnerMaxOrderByAggregateInput: ["id", "name", "logo"],
  PartnerMinOrderByAggregateInput: ["id", "name", "logo"],
  ProjectCountOrderByAggregateInput: ["id", "name"],
  ProjectMaxOrderByAggregateInput: ["id", "name"],
  ProjectMinOrderByAggregateInput: ["id", "name"],
  UserCreaterolesInput: ["set"],
  UserPasswordTypeNullableCreateEnvelopeInput: ["set"],
  UserPasswordTypeCreateInput: ["initialPassword", "password"],
  StringFieldUpdateOperationsInput: ["set"],
  UserUpdaterolesInput: ["set", "push"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  UserPasswordTypeNullableUpdateEnvelopeInput: ["set", "upsert", "unset"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
  UserPasswordTypeWhereInput: ["AND", "OR", "NOT", "initialPassword", "password"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  UserPasswordTypeUpsertInput: ["set", "update"],
  BoolFilter: ["equals", "not"],
  UserPasswordTypeUpdateInput: ["initialPassword", "password"],
  NestedBoolFilter: ["equals", "not"],
  BoolFieldUpdateOperationsInput: ["set"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

