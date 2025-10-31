FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm ci --ignore-scripts

COPY . .

FROM base AS build
RUN npm run build

FROM base AS dev
EXPOSE 3000
# проброс порта
CMD ["npx", "parcel", "src/pages/*.html", "--port", "3000", "--host", "0.0.0.0"]

FROM nginx:1.27-alpine AS prod
COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80