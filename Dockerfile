FROM node:10.16.0-alpine

COPY package.json package-lock.json ./

RUN npm i

COPY server.js ./

CMD ["npm", "start"]