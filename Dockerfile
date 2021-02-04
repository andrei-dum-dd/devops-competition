FROM node:14-alpine
USER node
EXPOSE 9000

WORKDIR /home/node
COPY . .
RUN npm install

CMD node app.js
