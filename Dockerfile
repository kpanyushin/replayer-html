FROM node:alpine as builder
WORKDIR /app
RUN apk update && apk add python make g++
ENV NODE_ENV=production
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY public public
COPY src src
COPY jsconfig.json .
CMD yarn build
