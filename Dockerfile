FROM node:14

WORKDIR /app

COPY package.json .

RUN ["npm", "install"]

RUN #chown -R node /app/node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
