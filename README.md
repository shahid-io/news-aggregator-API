# Project Title

Short project description or tagline.

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [API Routes](#api-routes)
    - [1. Get Personalized News](#1-get-personalized-news)
    - [2. User Registration](#2-user-registration)
    - [3. User Login](#3-user-login)
    - [4. Get User Preferences](#4-get-user-preferences)
    - [5. Update User Preferences](#5-update-user-preferences)
    - [6. Get User by Username](#6-get-user-by-username)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Clone the Repository](#clone-the-repository)
    - [Navigate to the Project Directory](#navigate-to-the-project-directory)
  - [Start the Server](#start-the-server)
  - [Running Unit Tests](#running-unit-tests)
  - [Contributors](#contributors)
## Overview

The News Aggregator project is designed to provide users with a personalized news experience based on their preferences. It incorporates robust user authentication, utilizes the NewsAPI to fetch news articles, and follows a structured project organization. The project is implemented using Node.js with essential packages for routing, request handling, authentication, and database operations.

## API Routes

### 1. **Get Personalized News**
   - **Method:** GET
   - **Endpoint:** `/news`
   - **Middleware:** `AuthReqMiddleware.checkAuth`
   - **Controller:** `NewsController.getNews`
   - **Description:** Fetches personalized news articles based on the user's preferences. Requires authentication to access.

### 2. **User Registration**
   - **Method:** POST
   - **Endpoint:** `/users/register`
   - **Middleware:** `ValidateUserReqMiddleware.validateSignUpReq`
   - **Controller:** `UserController.signupUser`
   - **Description:** Registers a new user in the system. Validates and processes the sign-up request.

### 3. **User Login**
   - **Method:** POST
   - **Endpoint:** `/users/login`
   - **Middleware:** `ValidateUserReqMiddleware.validateSignInReq`
   - **Controller:** `UserController.loginUser`
   - **Description:** Allows an existing user to log in. Validates and processes the login request.

### 4. **Get User Preferences**
   - **Method:** GET
   - **Endpoint:** `/preferences`
   - **Middleware:** `AuthReqMiddleware.checkAuth`
   - **Controller:** `UserController.getNewsPreferences`
   - **Description:** Retrieves the news preferences of the authenticated user.

### 5. **Update User Preferences**
   - **Method:** PUT
   - **Endpoint:** `/users/preferences`
   - **Middleware:** `AuthReqMiddleware.checkAuth`
   - **Controller:** `UserController.updateNewsPreferences`
   - **Description:** Updates the news preferences of the authenticated user.

### 6. **Get User by Username**
   - **Method:** GET
   - **Endpoint:** `/users/:username`
   - **Middleware:** `AuthReqMiddleware.checkAuth`
   - **Controller:** `UserController.getUserByUsername`
   - **Description:** Fetches user information based on the provided username. Requires authentication to access.

...

Feel free to explore and use these routes to build a complete News Aggregator application with user authentication and personalized news delivery.
## Features

- **User Authentication and Verification:** Implements a secure user authentication system to ensure that only authenticated users can access personalized news.
- **NewsAPI Integration:** Utilizes the NewsAPI's **/everything** endpoint with parameters such as search query **('q')**, publication date **('from')**, sorting criteria **(sortBy)**, and API key for fetching relevant news articles.
- **Structured Project Organization:** Follows a well-organized project structure with dedicated directories for configuration, controllers, middlewares, models, routes, services, and utility functions.
- **Node Packages:** Uses essential Node packages, including Express for web framework, body-parser for handling request bodies, Axios for making HTTP requests, Jsonwebtoken for token-based authentication, bcrypt for password hashing, mongoose for MongoDB interactions, dotenv for environment variable management, http-status-codes for HTTP status codes, nodemon for automatic server restarts during development, and additional testing packages such as sinon, chai, chai-http, and winston.
- **Unit Testing:** Includes comprehensive unit testing with folders dedicated to controllers, models, services, and utility functions. The testing setup involves sinon for stubs and spies, chai for assertions, and chai-http for HTTP testing.

## Project Structure

```
├───src
│   ├───config
│   ├───controllers
│   ├───middlewares
│   ├───models
│   ├───routes
│   ├───services
│   └───utils
│       ├───auth
│       ├───common
│       └───error
└───tests
    ├───acceptance
    ├───integration
    └───unit
        ├───controllers
        ├───models
        ├───services
        └───utils
____index.js
____.env
____.gitignore
____.mocha.config.js
```

## Getting Started

Follow these steps to get the project up and running on your local machine:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB is running)

### Clone the Repository

```bash
git clone https://github.com/shahid-io/news-aggregator-API
```

### Navigate to the Project Directory

```bash
> cd your-project
> npm install
```

Create a `.env` file in the root directory and add the following environment variables:

```bash
PORT=3020
MONGO_URL=your_mongodb_uri
SALT_ROUNDS=salt_value
JWT_EXPIRES_IN=1d
JWT_SECRET=your_jwt_secret
NEWS_API_KEY=your_news_api_key
NEWS_API_URL=https://newsapi.org/v2/everything

```

Replace `your_news_api_key`, `your_mongodb_uri`, and `your_jwt_secret` and so on with your actual values.

## Start the Server

```bash
npm run dev
```

This will start the server, and you can access the application at http://localhost:3000.

## Running Unit Tests

```bash
npm test
```

Feel free to explore the project and make any necessary adjustments based on your specific setup and requirements.

```bash
The provided code instructs users on how to navigate to the project directory, install dependencies, create a `.env` file, start the server, and run unit tests.
```

## Contributors

Thank you to the contributors who participated in this project:

- [Shahid Raza](https://github.com/shahid-io)

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.
