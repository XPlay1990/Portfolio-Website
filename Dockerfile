FROM node:alpine AS builder

WORKDIR /opt/web
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

FROM bitnami/nginx:latest
COPY --from=builder /opt/web/build /app
COPY custom_nginx.conf /opt/bitnami/nginx/conf/server_blocks/