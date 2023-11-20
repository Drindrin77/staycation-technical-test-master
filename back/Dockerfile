# Use an official Node runtime as a parent image
FROM node:18-alpine3.16

# Set the working directory to /app
WORKDIR /app/back

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the current directory contents into the container at /app
COPY . .

# Install dependencies
RUN npm install

RUN npx prisma db pull

RUN npx prisma generate

RUN npm run build

# Run app
CMD [ "npm", "run", "start:dev" ]