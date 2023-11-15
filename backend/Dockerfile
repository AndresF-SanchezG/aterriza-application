FROM node:14


WORKDIR /aterriza-application/api/backend


COPY package*.json ./
RUN npm install

COPY . .

#RUN npm run dev

#RUN npm install -g serve


EXPOSE 5000

CMD ["npm", "run", "start"]
