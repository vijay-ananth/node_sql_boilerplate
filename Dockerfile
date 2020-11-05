FROM node:alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 5000

#install migration package globally and run
# RUN npm install -d migrate-mongo
# RUN migrate-mongo up

CMD [ "npm", "start" ]