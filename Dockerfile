FROM node:trixie-slim
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]

# Build Angular
#FROM node:20-alpine AS build
#WORKDIR /app
#COPY package*.json ./
#RUN npm ci
#COPY . .
#RUN npm run build

# Serve statique
#FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=build /app/dist /usr/share/nginx/html
