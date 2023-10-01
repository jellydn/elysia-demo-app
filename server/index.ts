import { Elysia, t } from "elysia";

import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import swagger from "@elysiajs/swagger";

import logger from "./logger";
import { SignInDTO, UserTokenDTO, signIn } from "./signIn";

const port = process.env.PORT ?? 3000;
const app = new Elysia()
  .use(staticPlugin())
  .use(
    swagger({
      documentation: {
        info: {
          title: "Elysia",
          description: "Elysia API Documentation",
          version: "1.0.0",
        },
        tags: [
          { name: "App", description: "General endpoints" },
          { name: "Auth", description: "Authentication endpoints" },
        ],
      },
    }),
  )
  .use(cors())
  .get("/hello", () => "Hello Elysia", {
    response: t.String({
      description: "Returns a string",
    }),
    detail: {
      description: "The root endpoint",
      tags: ["App"],
    },
  })
  .post("/sign-in", ({ body }) => signIn(body), {
    body: SignInDTO,
    response: UserTokenDTO,
    detail: {
      description: "Sign in with username and password",
      tags: ["Auth"],
    },
  })
  .listen(port);

logger.info(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);

export { app };
export type App = typeof app;
