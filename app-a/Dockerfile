FROM node:20.10.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@10.2.5

RUN npm install

COPY . .

#RUN npm run build

#CMD ["node", "dist/main"]

EXPOSE 3000

CMD ["npm", "run", "start:dev"]