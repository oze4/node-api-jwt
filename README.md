# Node API with JWT : Proof of Concept

## Demo


https://user-images.githubusercontent.com/21092343/150077834-ac8d28a9-e1d1-40d0-9962-64426524112f.mp4

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

## Setup

- The easiest way to test this project is to install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) vscode extension. 
  - Once installed, open the `api.rest` file at the root of this project
- You will need to create a `.env` file based upon the `.env.example` file

## Commands

- `npm install` : installs dependencies
- `npm start` : starts the project via `nodemon`




---

[mattoestreich.com](https://mattoestreich.com)

---
