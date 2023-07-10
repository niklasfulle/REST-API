# REST-API

## Table of Contents

-   [Description](#description)
-   [Dependencies](#dependencies)
-   [Installation](#installation)

## Description

This is a REST-API written in Typescript, using Express and MongoDB. It is the starting point for some of my projects. It can create users and authenticate them.

## Authentication

It uses a JWT token for authentication. The token is stored in a cookie and is valid for a year. The token is signed with a secret key, which is stored in the `.env` file. The secret key is used to verify the token when a user makes a request to a protected route.

## Dependencies

| Name         | Version | Link                                               |
| ------------ | ------- | -------------------------------------------------- |
| Node.js      | 18.16.0 | [Link](https://nodejs.org/en/)                     |
| MongoDB      | 4.4.6   | [Link](https://www.mongodb.com/)                   |
| Typescript   | 4.4.3   | [Link](https://www.typescriptlang.org/)            |
| Express      | 4.18.2  | [Link](https://expressjs.com/)                     |
| Mongoose     | 7.3.2   | [Link](https://mongoosejs.com/)                    |
| zod          | 3.21.4  | [Link](https://www.npmjs.com/package/zod)          |
| cors         | 2.8.5   | [Link](https://www.npmjs.com/package/cors)         |
| helmet       | 7.0.0   | [Link](https://www.npmjs.com/package/helmet)       |
| argon2       | 0.30.3  | [Link](https://www.npmjs.com/package/argon2)       |
| Jsonwebtoken | 9.0.1   | [Link](https://www.npmjs.com/package/jsonwebtoken) |
| pino         | 6.12.0  | [Link](https://www.npmjs.com/package/pino)         |
| Dotenv       | 16.3.1  | [Link](https://www.npmjs.com/package/dotenv)       |

## Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the root directory and add the following variables:

```
PORT=4000
DB_URL=mongodb://localhost:27017/rest-api
CORSE_ORIGIN=http://localhost:3000
JWT_SECRET=your secret key
EXPIRES_IN=7d
```

4. Start the server with `npm run dev`
5. The server is now running on `http://localhost:3000`
