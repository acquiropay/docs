FROM node:alpine as build

RUN npm install -g vuepress

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:stable
COPY --from=build /app/public/ /usr/share/nginx/html
