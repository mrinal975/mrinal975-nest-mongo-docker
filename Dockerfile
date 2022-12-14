# Base image
FROM node:16-alpine as development

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install -g npm@8.18.0

# nstall nest
RUN npm i -g @nestjs/cli

# Bundle app source
COPY . .

RUN mkdir /usr/src/app/data


# Creates a "dist" folder with the production build
RUN npm run start:dev


# Start the server using the production build
CMD [ "node", "dist/main.js" ]


# Base image
FROM node:16-alpine as production

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install -g npm@8.18.0

# nstall nest
RUN npm i @nestjs/cli

# Bundle app source
COPY . .

RUN mkdir /usr/src/app/data

# Creates a "dist" folder with the production build
RUN npm run start

# Start the server using the production build
CMD [ "node", "dist/main.js" ]