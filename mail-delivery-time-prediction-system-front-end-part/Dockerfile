
# FROM node:18.17.0

# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# COPY . .
# RUN npm install --production
# RUN npm run build
# CMD ["npm","start"]
FROM node:lts

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js project
RUN npm run build

# Set the command to start the application
CMD ["npm", "start"]
