# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app/front

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Run app
CMD ["npm", "start"]
