# Exercise Tracker App

The **Exercise Tracker App** is a simple web application that allows users to create accounts, log their exercises, and view their exercise history. This README provides an overview of the application and its functionality.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
  - [Creating a User](#creating-a-user)
  - [Logging an Exercise](#logging-an-exercise)
  - [Viewing Exercise History](#viewing-exercise-history)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

The Exercise Tracker App offers the following features:

1. **User Registration:** Users can create accounts by providing a username.

2. **Exercise Logging:** Users can log their exercises by providing a description, duration, and an optional date.

3. **Exercise History:** Users can view their exercise history, including the count of exercises and exercise log entries.

4. **Date Filtering:** Users can filter their exercise history by specifying a date range.

5. **Result Limiting:** Users can limit the number of exercise log entries displayed.

## Getting Started

Follow these steps to set up and run the Exercise Tracker App on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally or access to a remote MongoDB instance.

### Installation

1. Clone the repository to your local machine:
   ```bash 
   git clone https://github.com/erickfb5/exercise-tracker.git
2. Navigate to the project directory:
   ```bash
   cd exercise-tracker
3. Install the required dependencies:
   ```bash
   npm install
### Environment Variables
Create a `.env` file in the project root directory and configure the following environment variables:

- **`PORT`**: The port on which the server will run.
- **`DATABASE_URI`**: The URI of your MongoDB database.

# Usage

### Creating a User
To create a new user, make a **`POST`** request to the `/api/users` endpoint with the username parameter in the request body. This will create a new user account.

### Logging an Exercise
To log an exercise, make a **`POST`** request to the `/api/users/:_id/exercises` endpoint, where **_:_id_** is the ID of the user you want to log the exercise for. Provide the description, duration, and an optional date (in YYYY-MM-DD format) in the request body.

### Viewing Exercise History
To view exercise history for a user, make a **`GET`** request to the `/api/users/:_id/logs` endpoint, where **_:_id_** is the ID of the user. You can use query parameters to filter and limit the results:

- **`from`**: Start date for filtering (YYYY-MM-DD format).
- **`to`**: End date for filtering (YYYY-MM-DD format).
- **`limit`**: Maximum number of logs to retrieve.

# API Endpoints

- **`POST`** `/api/users`: Create a new user.
- **`GET`** `/api/users`: Retrieve a list of all users.
- **`POST`** `/api/users/:_id/exercises`: Log an exercise for a user.
- **`GET`** `/api/users/:_id/logs`: Retrieve exercise logs for a user with optional filtering and limiting.

# License
This project is licensed under the **[MIT License](https://spdx.org/licenses/MIT.html)**.