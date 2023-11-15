FROM node:14

WORKDIR /aterriza-application/api


COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


RUN npm install -g serve


EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "5000"]