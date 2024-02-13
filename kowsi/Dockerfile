FROM node:lts-alpine
WORKDIR /kowsi
COPY package*.json . 
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]