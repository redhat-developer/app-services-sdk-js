# Stage 1 - the build process
FROM node:22.23.4-alpine as compile-server
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8000

CMD [ "npm", "run", "start-preseed" ]