import { describe, expect, it } from "bun:test";

import { app } from ".";

describe("Elysia", () => {
  it("return a response", async () => {
    const response = await app
      .handle(new Request("http://localhost/hello"))
      .then(async (res) => res.text());

    expect(response).toBe("Hello Elysia");
  });
});
