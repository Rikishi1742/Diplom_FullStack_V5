// import { UserInputError } from "apollo-server";
import { hashPassword } from "../auth/authHelper";
import { Prisma } from "generated/client";
import { addValidateUniqueFieldHook } from "../modelHelpers";
import logger from "./../logger";
import { prisma } from "./../prismaInit";

const addInitialUserPasswordHook = () => {
  prisma.$use(async (params, next) => {
    if (params.model === "User") {
      const initialPassword = process.env.NEW_USER_PASSWORD;

      if (params.action === "create") {
        const userData = params.args.data;

        const password = (!userData.password || !userData.password.password) ? initialPassword : userData.password.password;
        const hashedPassword = await hashPassword(password);

        logger.info(`New user hash password ${hashedPassword}`);

        userData.password = {

          initialPassword: (!userData.password || !userData.password.password) ? true : false,
          password: hashedPassword,
        };

        logger.info(`user password ${JSON.stringify(userData.password)}`);
      }

      if (params.action === "createMany") {
        const usersData = params.args.data;

        for (let i = 0; i < usersData.length; i++) {
          const userData = usersData[i];

          if (!userData.password || !userData.password.password) {
            userData.password = {
              initialPassword: true,
              password: initialPassword,
            };
          }
        }
      }
    }

    return next(params);
  });
};

export const initUserHooks = () => {
  logger.info("Prisma: User hooks init");
  addValidateUniqueFieldHook("User", ["username"]);
  addInitialUserPasswordHook();
};
