import { Elysia } from "elysia";

import logger from "./logger";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

logger.info(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
