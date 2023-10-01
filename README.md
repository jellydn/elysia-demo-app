<h1 align="center">Welcome to elysia-demo-app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.50-blue.svg?cacheSeconds=2592000" />
</p>

## 🚀 Usage with Docker

Before running the application with Docker, make sure you have [Docker](https://orbstack.dev) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

### Building the Docker image

```bash
docker build -t elysia-demo-app .
```

### Running with Docker Compose and Traefik

1. Create a network named `web` if you haven't already:

   ```bash
   docker network create web
   ```

2. Start the services:

   ```bash
   docker-compose up
   ```

You should now be able to access the application at `http://your-service.local`.

## Show your support

Give a ⭐️ if this project helped you!
