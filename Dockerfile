FROM node:lts-alpine as build-stage

MAINTAINER zcy-trading-data-market

COPY . /nest-app

WORKDIR /nest-app

RUN npm install
 
EXPOSE 3001

ENTRYPOINT npm run start