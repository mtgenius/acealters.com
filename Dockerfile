FROM node AS build
LABEL Author="Charles Stover"
WORKDIR /var/www
COPY package*.json /var/www/
RUN npm install
COPY . /var/www/
RUN npm run build
FROM nginx
COPY --from=build /var/www /usr/share/nginx/html
EXPOSE 80
