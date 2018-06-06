# [AceAlters.com](https://acealters.com/)

## Development Mode
To run this application with hot reloading for development purposes, use `yarn start`.

## Build Static File
To compile this project into static files, use `npm run build`.

## Build Docker Image
To build a Docker image yourself, use `docker build --build-arg HTTP_PROXY=%HTTP_PROXY% --build-arg HTTPS_PROXY=%HTTPS_PROXY% --file Dockerfile --tag mtgenius/acealters .`.

## Download Docker Image
To download a pre-built Docker image, use `docker pull mtgenius/acealters`.

## Production Mode
To run a Docker container for production, use `docker run --detach --name acealters --publish 80:80 mtgenius/acealters`.
