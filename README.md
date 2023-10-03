# Elysia Demo App: A Real-World Example Using Bun, Docker, and Fly.io 🚀

![Version](https://img.shields.io/badge/version-1.0.50-blue.svg?cacheSeconds=2592000)

## Introduction

This project serves as a practical guide to developing and deploying web applications using Bun, a modern JavaScript runtime, along with containerization through Docker and deployment via Fly.io. Whether you're a developer looking to adopt these technologies or an engineer focusing on DevOps practices, this demo offers an end-to-end example to kickstart your journey.

[![IT Man - From Dev to Deployment: Learning Bun, Docker, and Fly.io with Elysia Demo App [Vietnamese]](https://i.ytimg.com/vi/kTekCcMlleU/hqdefault.jpg)](https://www.youtube.com/watch?v=kTekCcMlleU)

## Prerequisites

- [Bun](https://bun.sh/) installed on your system.
- [antfu/ni](https://github.com/antfu/ni) 💡 Use the right package manager.

## Usage

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jellydn/elysia-demo-app.git
   ```

2. **Install Dependencies**

   ```bash
   bun install
   ```

3. **Run Dev Locally**
   ```bash
   bun run dev
   ```
   Open http://localhost:3000/ with your browser to see the result.

## Test

**Run Test Locally**

```bash
bun run test
```

## Elysia In One Picture 📸

![https://elysiajs.com/assets/feature-sheet.webp](https://elysiajs.com/assets/feature-sheet.webp)

## 🛡 End-to-End Type-Safety with Elysia and Eden

[End-to-end type-safety](https://elysiajs.com/patterns/end-to-end-type-safety.html) is a robust approach that ensures type consistency across every component of your system. By leveraging this, you can catch type mismatches early in the development cycle, reducing runtime errors and ensuring predictable system behavior.

### Benefits

- Prevents bugs and errors due to type mismatches.
- Reduces risk of unexpected behavior.
- Enhances code readability and maintainability.

### Eden Plugin for Elysia

Elysia's Eden plugin is specifically designed to achieve end-to-end type safety between the client and the server.

#### Installation

To utilize Eden's capabilities, you need to install it on your frontend:

```bash
bun add elysia @elysiajs/eden
```

**TIP:** Eden requires Elysia for type inference. Install Elysia as a dev dependency.

```typescript
// server.ts
import { Elysia, t } from "elysia";

export type App = typeof app;
```

#### Client-Side Usage

Once you've installed and configured Eden, you can consume the Elysia API on the client-side as follows:

```typescript
// client.ts
import { edenTreaty } from "@elysiajs/eden";

import type { App } from "./server";

const client = edenTreaty<App>("http://localhost:8080");
```

### Method Chaining

Elysia promotes the use of method chaining for better type inference and cleaner code.

```typescript
// Example
const app = new Elysia()
  .state("build", 1)
  .get("/", ({ store: { build } }) => build)
  .listen(3000);
```

With [method chaining](https://elysiajs.com/patterns/method-chaining.html), you maintain type safety throughout your code, ensuring that each method you chain is aware of the types introduced by the preceding methods.

## 🚀 Usage with Docker

Before running the application with Docker, make sure you have [Docker](https://orbstack.dev) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

### Building the Docker image

```bash
docker build -t elysia-demo-app .
```

### Running with Docker Compose and [Traefik](https://github.com/traefik/traefik/)

1. Create a network named `web` if you haven't already:

   ```bash
   docker network create web
   ```

2. Start the services:

   ```bash
   docker-compose up
   ```

You should now be able to access the application at `http://elysia-demo-app.local`.

Make sure you have added the following to your `/etc/hosts` file.

```
127.0.0.1 	elysia-demo-app.local
```

## 🚀 Deploying to [Fly.io](https://fly.io)

### Deploy via Dockerfile

If you have your project wrapped in a Docker container, deploying to Fly.io is straightforward.

#### Initial Deployment

Run the following command to initiate deployment:

```bash
fly launch
```

During this process, you'll be prompted to:

- Choose an app name or leave it blank to generate one.
- Select an organization.
- Choose a region for deployment.

The `fly.toml` configuration file will be generated automatically.

#### Configuration

Most Docker applications require some environment variables. You can add these in the `[env]` block in the `fly.toml` file:

```toml
[env]
  MY_SPECIAL_ENV = "some_value"
  MAX_PLAYER_COUNT = "15"
```

For sensitive data, use `flyctl` to set up secrets:

```bash
flyctl secrets set MY_SECRET=romance
```

To list existing secrets, use:

```bash
flyctl secrets list
```

#### Final Deployment

If you didn't deploy your application during the initial setup, you can deploy it now:

```bash
fly deploy
```

If you prefer to build the Docker image locally, use:

```bash
fly deploy --local-only
```

#### Access Your App

To open your deployed app in a browser, run:

```bash
fly apps open
```

### Taking it Further

For applications that require persistent storage, consider:

- [Persistent Volumes](https://fly.io/docs/flyctl/volumes/): For data that needs to persist across deployments.
- [Fly Postgres Database](https://fly.io/docs/flyctl/pg/create/): Automates the creation of a `DATABASE_URL` environment variable when attached to your app.
- [GitHub CI Action: Auto Deploy to Fly.io](https://fly.io/docs/laravel/advanced-guides/github-actions/#github-ci-action-auto-deploy-to-fly-io)

## Additional Resources

- [Bun 1.0 Release Blog](https://bun.sh/blog/bun-v1.0)
- [An Introduction to the Bun JavaScript Runtime](https://www.sitepoint.com/bun-javascript-runtime-introduction/)
- [Elysia - Fast, and friendly Bun web framework](https://elysiajs.com/)

## Author

👤 **Huynh Duc Dung**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

If this guide has been helpful, please give it a ⭐️.

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)
