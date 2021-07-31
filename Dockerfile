FROM node:latest
WORKDIR usr/src/app
COPY package*.json /usr/src/app/
RUN rm -rf node_modules package-lock.json && npm install && npm start
RUN rm -rf /usr/src/app
ADD ./dist/* /usr/src/app/
EXPOSE 8086 
CMD ["node", "main.js"]
