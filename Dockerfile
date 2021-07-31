FROM node:latest
WORKDIR usr/src/app
RUN rm -rf /usr/src/app
ADD ./dist/* /usr/src/app/
EXPOSE 8086 
CMD ["node", "main.js"]
