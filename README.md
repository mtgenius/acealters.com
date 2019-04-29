# [AceAlters](https://acealters.com/) [![build](https://travis-ci.com/mtgenius/acealters.com.svg?branch=master)](https://travis-ci.com/mtgenius/acealters.com)

AceAlters is a gallery of cards from the _Magic: The Gathering_ collectible
card game as altered by [Ace Quisido](https://quisido.com/).

## Build

### Static Files
To compile this project into static files, use `npm run build`.

### Docker Image
To build a Docker image yourself, use `npm run docker-build` or `npm run docker-build-proxy`.

## Run

### Development Mode
To run this application with hot reloading for development purposes, use `yarn start`.

### Production Mode
To run a Docker container for production, use `npm run docker-run --publish 80:80`.
