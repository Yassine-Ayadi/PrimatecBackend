FROM node:latest
WORKDIR usr/src/app
COPY package*.json /usr/src/app/
RUN npm run 
RUN rm -rf /usr/src/app
ADD ./dist/* /usr/src/app/
EXPOSE 8086 
CMD ["node", "main.js"]
