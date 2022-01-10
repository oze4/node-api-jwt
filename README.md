# Node JWT API Proof of Concept

## Notes

This project uses MongoDB to store User accounts. Users can register accoounts to access protected routes via JWT.

## Setup

- The easiest way to test this project is to install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) vscode extension. 
  - Once installed, open the `api.rest` file at the root of this project
- You will need to create a `.env` file based upon the `.env.example` file

## Commands

`npm install` : installs dependencies
`npm start` : starts the project via `nodemon`