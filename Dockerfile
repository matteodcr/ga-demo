# Step 1: Build React App
FROM node:alpine3.18 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Step 2: Server with Caddy
FROM caddy:2-alpine
WORKDIR /usr/share/caddy
COPY --from=build /app/build .
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80 443