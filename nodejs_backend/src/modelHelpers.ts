import { UserInputError } from "apollo-server";
import { Prisma } from "generated/client";
import logger from "./logger";
import { prisma } from "./prismaInit";

const validateUniqueData = async (
  document,
  model: Prisma.ModelName,
  uniqueFields: string[]
) => {
  const whereCond = uniqueFields.reduce((object, field) => {
    object[field] = document[field];
    return object;
  }, {});

  logger.info(`Where condition: ${JSON.stringify(whereCond)}`);

  const existingDocument = await prisma[model].findUnique({
    where: whereCond,
  });

  if (existingDocument) {
    const error = `Duplicate ${model}: ${JSON.stringify(
      existingDocument
    )}, writing: ${JSON.stringify(document)}`;

    logger.error(error);

    throw new UserInputError(error);
  }
};

export const validateUniqueFields = async (
  params: Prisma.MiddlewareParams,
  model: Prisma.ModelName,
  uniqueFields: string[]
) => {
  if (params.model === model) {
    if (params.action === "create") {
      logger.info(`Creating ${model}: ${JSON.stringify(params.args)}`);

      const createData = params.args.data;
      await validateUniqueData(createData, model, uniqueFields);
    }

    if (params.action === "createMany") {
      logger.info(`Creating many ${model}: ${JSON.stringify(params.args)}`);
      const createManyData = params.args.data;

      if (Array.isArray(createManyData)) {
        for (let i = 0; i < createManyData.length; i++) {
          logger.info(
            `Creating ${model}: ${JSON.stringify(createManyData[i])}`
          );
          await validateUniqueData(createManyData[i], model, uniqueFields);
        }
      }
    }

    if (params.action === "update") {
      logger.info(`Update ${model}: ${JSON.stringify(params.args)}`);
      const updateData = params.args.data;
      await validateUniqueData(updateData, model, uniqueFields);
    }

    if (params.action === "updateMany") {
      logger.info(`Update many ${model}: ${JSON.stringify(params.args)}`);

      const updateManyData = params.args.data;

      if (Array.isArray(updateManyData)) {
        for (let i = 0; i < updateManyData.length; i++) {
          logger.info(`Update ${model}: ${JSON.stringify(updateManyData[i])}`);
          await validateUniqueData(updateManyData[i], model, uniqueFields);
        }
      }
    }

    if (params.action === "upsert") {
      logger.info(`Upsert ${model}: ${JSON.stringify(params.args)}`);
      const upsertData = params.args.data;
      await validateUniqueData(upsertData, model, uniqueFields);
    }
  }
};

export const addValidateUniqueFieldHook = (
  model: Prisma.ModelName,
  uniqueFields: string[]
) => {
  prisma.$use(async (params, next) => {
    await validateUniqueFields(params, model, uniqueFields);
    return next(params);
  });
};
