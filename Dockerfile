FROM node:15.11.0-alpine AS builder

WORKDIR /opt/web
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build

FROM bitnami/nginx:latest
COPY --from=builder /opt/web/build /usr/share/nginx/html