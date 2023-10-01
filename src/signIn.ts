import { t } from "elysia";

import logger from "./logger";

export const signIn = (body: { username: string; password: string }) => {
  logger.info(`🦊 ${body.username} is signed in`);
  if (body.username === "admin" && body.password === "admin") {
    return {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    };
  }

  throw new Error("Invalid username or password");
};

export const SignInDTO = t.Object(
  {
    username: t.String(),
    password: t.String(),
  },
  {
    description: "Sign in with username and password",
  },
);
export const UserTokenDTO = t.Object(
  {
    token: t.String(),
  },
  {
    description: "User token object",
  },
);
