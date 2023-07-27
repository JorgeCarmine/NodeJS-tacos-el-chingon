FROM node:18

WORKDIR /tacos

COPY . .

RUN npm i

EXPOSE 8080

CMD ["node", "server.js"]