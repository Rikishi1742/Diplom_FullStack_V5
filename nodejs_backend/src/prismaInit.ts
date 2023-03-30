// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "./generated/client";
import { initHooks } from "./hooks";
import logger from "./logger";

const prisma = new PrismaClient();

async function initPrisma() {
  await prisma.$connect();  
  logger.info("Connected to prisma");

  await initHooks();

}

export {prisma, initPrisma};
