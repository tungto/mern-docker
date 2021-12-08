# sepecific a base image
FROM node:15
# Create app directory
WORKDIR /app
COPY package*.json .
# Install some dependencies
#RUN npm install --only=production
ARG NODE_ENV
RUN if [ "$NODE_ENV" = development ]; \
			then npm install; \
			else npm install --only=production; \
			fi
# Bundle app source
COPY . .
ENV PORT  3000
EXPOSE $PORT
# Default command 
#CMD ["npm", "run", "dev"]
CMD ["node", "index.js"]