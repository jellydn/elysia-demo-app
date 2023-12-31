import os from "os";

import type { App } from "../../index";

export default (app: App) => {
  app.get("/", () => ({ status: "ok" }));

  app.get("/info", () => {
    const cpuUsage = process.cpuUsage();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    return {
      cpuUsage,
      totalMemory,
      freeMemory,
    };
  });

  return app;
};
