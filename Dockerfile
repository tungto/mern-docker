# sepecific a base image
FROM node:15
# Create app directory
WORKDIR /app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .
# Install some dependencies
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
ENV PORT  3000
EXPOSE $PORT
# Default command

CMD ["npm", "run", "dev"]