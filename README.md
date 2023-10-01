# Elysia Demo App: A Real-World Example Using Bun, Docker, and Fly.io 🚀

![Version](https://img.shields.io/badge/version-1.0.50-blue.svg?cacheSeconds=2592000)

## Introduction

This project serves as a practical guide to developing and deploying web applications using Bun, a modern JavaScript runtime, along with containerization through Docker and deployment via Fly.io. Whether you're a developer looking to adopt these technologies or an engineer focusing on DevOps practices, this demo offers an end-to-end example to kickstart your journey.

## Prerequisites

- [Bun](https://bun.sh/) installed on your system.
- [antfu/ni](https://github.com/antfu/ni) 💡 Use the right package manager.

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jellydn/elysia-demo-app.git
   ```

2. **Install Dependencies**

   ```bash
   bun install
   ```

3. **Run Tests Locally**
   ```bash
   bun run dev
   bun run test
   ```

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

## Additional Resources

- [Bun 1.0 Release Blog](https://bun.sh/blog/bun-v1.0)
- [Elysia - Fast, and friendly Bun web framework | ElysiaJS](https://elysiajs.com/)

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
