import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import logger from "./logger";
import cors from "cors";
import pkg from "body-parser";
import "reflect-metadata";
import { resolvers } from "./generated/type-graphql";
import customResolvers from "./custom-resolvers/index";
const { json } = pkg;
import * as TypeGraphQL from "type-graphql";
import { PrismaClient } from "./generated/client";
import { prisma } from "./prismaInit";
import { checkAccessToken, checkRefreshTokenAndGenerateNewAccessToken } from "./auth/authHelper";

interface Context {
  prisma: PrismaClient;
  user: object | null;
}


const PrepareContextWithAuth = async ({ req, res }): Promise<Context> => {
  const ACCESS_TOKEN_NAME = 'x-access-token';
  const REFRESH_TOKEN_NAME = 'x-refresh-token';

  let callFromStudio = req.url === '/'; // не будем логгировать вызовы от Apollo Studio - они каждую секунду идут
  res.setHeader('Access-Control-Expose-Headers', ['x-access-token', 'x-refresh-token']);
  const accessToken = req.headers[ACCESS_TOKEN_NAME];
  if (accessToken) {
    //console.log('Access', accessToken);
    try {
      // try to retrieve a user with the token
      const decodedAccessToken = await checkAccessToken(accessToken as string);

      // add the user to the context
      if (!callFromStudio) {
        logger.debug(
          'User authenticated via access token: ' +
          JSON.stringify(decodedAccessToken) +
          ' URL: ' +
          req.url
        )
      }

      return { user: decodedAccessToken, prisma: prisma };
    } catch (err) {

      // access token is invalid
      // logger.debug('Access token is invalid: ' + err);
    }
  }
  // no access token or invalid access token

  const refreshToken = req.headers[REFRESH_TOKEN_NAME];
  // logger.debug("Refresh token: " + refreshToken)

  if (refreshToken) {
    try {
      const tokens = await checkRefreshTokenAndGenerateNewAccessToken(refreshToken as string);

      logger.debug(`NEW ACCESS TOKEN: ${tokens.accessToken}`);

      if (tokens !== null) {

        const decodedAccessToken = checkAccessToken(tokens.accessToken);

        // done: accessToken надо-тоже как-то вернуть!
        res.setHeader(ACCESS_TOKEN_NAME, tokens.accessToken);

        // add the user to the context
        if (!callFromStudio) {
          logger.debug(
            'User authenticated via refresh token: ' +
            JSON.stringify(decodedAccessToken) +
            ' URL: ' +
            req.url
          )
        }
        return { user: decodedAccessToken, prisma: prisma };
      } else {
        // refresh token is invalid
        if (!callFromStudio) {
          logger.debug(
            'Access token is invalid and refresh token is invalid.' +
            ' URL: ' +
            req.url
          )
        }
      }
    } catch (err) {
      // refresh token is invalid
      //logger.debug('Refresh token is invalid: ' + err);
      // но продолжим - просто пользователь будет не залогинен
    }
  }

  // no refresh token or invalid refresh token
  return { user: null, prisma: prisma };
}


export const CreateApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const port = process.env.BACKEND_API_PORT;

  logger.info("GraphQL: Building schema");


  const schema = await TypeGraphQL.buildSchema({
    resolvers: [...resolvers, ...customResolvers],
    validate: false,
  });

  logger.info("GraphQL: Create server");

  const server = new ApolloServer<Context>({
    schema: schema,
  });

  await server.start();

  app.use((req, res, next) => {
    // log method and request body and real ip
    logger.info(`${req.method} ${req.url} ${req.ip}`);
    next();
  });

  // always respond ok to health check
  app.use("/health", cors<cors.CorsRequest>(), json(), (req, res) => {
    res.json({ status: "ok" });
  });

  // Specify the path where we'd like to mount our server
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: PrepareContextWithAuth
    })
  );

  app.use((req, res) => {
    res.status(404).send("Not found");
  });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: port }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
};
