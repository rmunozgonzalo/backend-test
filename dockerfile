#etapa 1 de construccion
FROM node:22 AS build

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

#etapa 2 de construccion final
FROM node:22-slim

WORKDIR /usr/app

COPY --from=build  /usr/app/node_modules ./node_modules
COPY --from=build  /usr/app/dist ./dist
COPY --from=build  /usr/app/package*.json ./

EXPOSE 3001
#comando
CMD ["node", "dist/index.js"]