FROM node:19 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:19 as production-stage
WORKDIR /app
RUN npm install -g serve
COPY --from=build-stage /app/dist .
EXPOSE 80
CMD ["serve", "-s", ".", "-l", "80"]