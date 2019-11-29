# Dockerfile for running the server
FROM node:latest
WORKDIR /app/src
COPY . .
EXPOSE 3000
RUN npm i -g ts-node && npm i 
CMD ts-node src/index.ts