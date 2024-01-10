# FROM hello-world:latest
FROM node:16.13.0-alpine3.14

RUN apk add --no-cache git && adduser --disabled-password server
USER server
WORKDIR /app

# Build Rivet libs
COPY --chown=server package.json yarn.lock ./
COPY --chown=server bin/build-libs.sh bin/build-libs.sh
RUN SKIP_INSTALL=1 ./bin/build-libs.sh

# Install libs
RUN yarn install --production

# Build server
COPY --chown=server src/ src/
COPY --chown=server tsconfig.json .
RUN yarn run build:server

CMD ["node", "src/server.js"]
