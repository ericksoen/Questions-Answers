FROM node:current

RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]