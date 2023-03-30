import { initDbConnection } from "./mongodb";
import { CreateApolloServer } from "./apolloServer";
import { initPrisma } from "./prismaInit";

const startBackend = async () => {
  // await initDbConnection();
  await initPrisma();
  await CreateApolloServer();
};

startBackend();
