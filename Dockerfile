FROM node:14

WORKDIR /client

# copy package.json and lock file first
COPY package*.json .

RUN npm install

# copy remaining files to WORKDIR
COPY . .

# This command is for containers, 
# executed when a container is created
CMD ["sanity","start"]
