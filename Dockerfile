FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x scripts/start_server.sh

EXPOSE 2102

CMD ["/app/scripts/start_server.sh"]