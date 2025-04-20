FROM node:18-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . .

EXPOSE 5173

CMD [ "npm","run","dev" ]