FROM node:16
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY /server/package*.json ./

RUN npm install

COPY /server/. .

EXPOSE 8080

CMD [ "node", "server.js" ]