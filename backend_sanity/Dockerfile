FROM node:14

WORKDIR /server 

# copy package.json and lock file first
COPY package*.json .

RUN npm install

# copy remaining files to WORKDIR
COPY . .


