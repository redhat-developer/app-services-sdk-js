# Stage 1 - the build process
FROM node:17-alpine as compile-server
WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 8000

CMD [ "npm", "start" ]