# STAGE 1: Build the app
FROM node:22-alpine AS base

RUN mkdir app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# STAGE 2: Run the app
FROM node:22-alpine
WORKDIR /app
COPY --from=base /app .
EXPOSE 8080

CMD ["npm", "start"]
