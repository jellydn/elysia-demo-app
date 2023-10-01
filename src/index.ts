import { Elysia } from "elysia";

import swagger from "@elysiajs/swagger";

import logger from "./logger";

const app = new Elysia();

app.use(
  swagger({
    documentation: {
      info: {
        title: "Elysia",
        description: "Elysia API Documentation",
        version: "1.0.0",
      },
    },
  }),
);

app.get("/", () => "Hello Elysia", {
  detail: {
    tags: ["App"],
  },
});

const port = process.env.PORT ?? 3000;
app.listen(port);

logger.info(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
