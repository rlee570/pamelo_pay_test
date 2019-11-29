# This is a Dockerfile for testing
FROM node:latest
WORKDIR /app/src
COPY . .
EXPOSE 3000
RUN npm i -g ts-node && npm i 
CMD npm test