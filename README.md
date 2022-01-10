# Node API with JWT : Proof of Concept

## Synopsis

This project uses MongoDB to store User accounts. Users can register accounts to access protected routes via JWT. We use `bcrypt` to salt and hash passwords before storing in Mongo.

#### Important

Authorization header value must start with `JWT` plus one space, and then the JWT eg: 

```
// header shown as JSON
{
  "authorization": "JWT yourjwt.tokengoes.here"
}
``` 

[See here for more](https://github.com/oze4/node-api-jwt/blob/master/.github/node-jwt-poc.gif)

## Setup

- The easiest way to test this project is to install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) vscode extension. 
  - Once installed, open the `api.rest` file at the root of this project
- You will need to create a `.env` file based upon the `.env.example` file

## Commands

- `npm install` : installs dependencies
- `npm start` : starts the project via `nodemon`

## Demo

![demo](https://github.com/oze4/node-api-jwt/blob/master/.github/node-jwt-poc.gif)
