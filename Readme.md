# Zebra

An Open Source project for creating Online Web Store.

[![CircleCI](https://circleci.com/gh/acierto/zebra.svg?style=svg)](https://circleci.com/gh/acierto/zebra)

## Build

To build the project you need to have installed on your local computer
* Node.js 12
* Latest npm
* MySQL 5.7 and create database "zebra" with credentials "zebra"/"zebra"

After you have aforementioned tools installed and configured you need to run:
* npm install 
* npm run bootstrap

First command will download all necessary JS modules and second will build the project with help of Lerna.

## Run 

Once you complete with section "Build", you can run it, for that you need to run `gulp` command. 
It will start backend and frontend part of the application.

If everything went well you can access:
 * GUI: http://localhost:6517
 * GraphQL: http://localhost:3333/graphql
 * To ping backend: http://localhost:3333/ping
 
 ## GUI 
 
 [Zebra Products](docs/zebra-products.png)
 
 
