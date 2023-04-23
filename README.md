
## Aim of the Project 
  I wanted to implement cron job into nestjs application. Cron job that I created cleans the student table every end of day. 
 
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Working with Docker

Building docker image 
```bash
$  docker build -t <your_image_name> .
``` 
Running your container 
```bash
$  docker run -dp 3000:3000 <your_image_name>
``` 
If you have not knowledge about docker. [Check out here!](https://docs.docker.com/get-started/02_our_app/)

