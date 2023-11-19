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

RUN npx prisma generate

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Run app
CMD ["npm", "start"]
