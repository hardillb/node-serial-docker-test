FROM node:16-alpine

WORKDIR /usr/src/app
COPY index.js .
COPY package*.json ./
RUN npm ci --omit=dev

CMD [ "node", "index.js" ]