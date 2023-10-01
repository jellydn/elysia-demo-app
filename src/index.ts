import { Elysia, t } from "elysia";

import { cors } from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";

import logger from "./logger";

export const app = new Elysia();

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

app.use(cors());

app.get("/", () => "Hello Elysia", {
  detail: {
    tags: ["App"],
  },
});

const signIn = (body: { username: string; password: string }) => {
  logger.info(`🦊 ${body.username} is signed in`);
  if (body.username === "admin" && body.password === "admin") {
    return {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    };
  }

  throw new Error("Invalid username or password");
};

app.post("/sign-in", ({ body }) => signIn(body), {
  body: t.Object({
    username: t.String(),
    password: t.String(),
  }),
  detail: {
    tags: ["Auth"],
  },
});

const port = process.env.PORT ?? 3000;
app.listen(port);

logger.info(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
