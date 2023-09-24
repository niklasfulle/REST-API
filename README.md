# REST-API

## Table of Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Installation](#installation)

## Description

This is a REST-API written in Typescript, using Express and MongoDB. It is the starting point for some of my projects. It can create users and authenticate them.

## Authentication

It uses a JWT token for authentication. The token is stored in a cookie and is valid for a year. The token is signed with a secret key, which is stored in the `.env` file. The secret key is used to verify the token when a user makes a request to a protected route.

## Dependencies

| name                    | version | url                                                   |
| ----------------------- | ------- | ----------------------------------------------------- |
| @typegoose/typegoose    | ^11.5.0 | https://www.npmjs.com/package/@typegoose/typegoose    |
| @types/node             | ^20.6.2 | https://www.npmjs.com/package/@types/node             |
| argon2                  | ^0.31.1 | https://www.npmjs.com/package/argon2                  |
| cookie-parser           | ^1.4.6  | https://www.npmjs.com/package/cookie-parser           |
| cors                    | ^2.8.5  | https://www.npmjs.com/package/cors                    |
| dotenv                  | ^16.3.1 | https://www.npmjs.com/package/dotenv                  |
| express                 | ^4.18.2 | https://www.npmjs.com/package/express                 |
| express-async-errors    | ^3.1.1  | https://www.npmjs.com/package/express-async-errors    |
| helmet                  | ^7.0.0  | https://www.npmjs.com/package/helmet                  |
| http-status-codes       | ^2.2.0  | https://www.npmjs.com/package/http-status-codes       |
| jsonwebtoken            | ^9.0.2  | https://www.npmjs.com/package/jsonwebtoken            |
| mongoose                | ^7.5.2  | https://www.npmjs.com/package/mongoose                |
| mongoose-slug-generator | ^1.0.4  | https://www.npmjs.com/package/mongoose-slug-generator |
| pino                    | ^8.15.1 | https://www.npmjs.com/package/pino                    |
| pino-pretty             | ^10.2.0 | https://www.npmjs.com/package/pino-pretty             |
| semver                  | ^7.5.4  | https://www.npmjs.com/package/semver                  |
| ts-node-dev             | ^2.0.0  | https://www.npmjs.com/package/ts-node-dev             |
| typescript              | ^5.2.2  | https://www.npmjs.com/package/typescript              |
| zod                     | ^3.22.2 | https://www.npmjs.com/package/zod                     |
| zod-express-middleware  | ^1.4.0  | https://www.npmjs.com/package/zod-express-middleware  |

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
