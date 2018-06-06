FROM node:latest AS builder
LABEL Author="Charles Stover"
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
RUN yarn install
COPY . /usr/src/app/
RUN npm run build

FROM nginx:latest
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
