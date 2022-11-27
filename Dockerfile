FROM node:18.12.1

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV PORT 4200

EXPOSE $PORT

CMD ["npm", "run", "prod"]