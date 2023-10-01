FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY server server
COPY tsconfig.json .
COPY public public

ENV NODE_ENV production
CMD ["bun", "server/index.ts"]

EXPOSE 3000
