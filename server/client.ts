import { edenTreaty } from "@elysiajs/eden";

import type { App } from "./index";
import logger from "./logger";

const port = process.env.PORT ?? 3000;
const app = edenTreaty<App>(`http://0.0.0.0:${port}`);

const hello = await app.hello.get();

logger.info(hello.data); // Hello Elysia

try {
  const signIn = await app["sign-in"].post({
    username: "admin",
    password: "admin",
  });
  logger.info(signIn.data);
} catch (error) {
  logger.error(error);
}
