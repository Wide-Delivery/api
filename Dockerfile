FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN ["npm", "install"]

RUN #chown -R node /app/node_modules
RUN mkdir -p /var/log/app && chown -R node:node /var/log/app

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
