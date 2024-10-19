# Task Management API 🚀

This API allows you to manage tasks in applications, including creating, reading, updating, and deleting tasks. It uses Express and MySQL as the database🔥

## It's type safe 💪

If you trate to introduce a incorrect type in the request body you will get something like this:
![examplePostmanError](./files/postManError1.png)

It's is a simple API that I developed to improve my skills in Node.js and Express and API architecture. It's a work in progress and I'm open to suggestions and improvements. 🤝

> Check ./src/db/taskSchema.sql file to see the task table schema proposed.

> You can check the types in ./src/types.ts file to see the types for the request body and the response.

## Endpoints

### 1. Get All Tasks

- **Method:** `GET`
- **Route:** `/api/tasks`
- **Query Parameters:**
  - `page`: Page number (defaults to 1)
  - `limit`: Number of results per page (defaults to 10, or returns all if omitted)
  - Example: `http://localhost:3000/api/tasks?page=2&limit=20`
- **Response:**
  ```json
  {
    "tasks": [ ... ],  // Array of tasks
    "total": 100,      // Total number of tasks
    "page": 2,         // Current page
    "limit": 20        // Limit of tasks per page
  }
  ```
  If you want to get all the tasks you can omit the `page` and `limit` parameters.

### 2. Get Tasks by User ID

- **Method:** `GET`
- **Route:** `/api/tasks/user/:id`
- **URL Params:**
  - `id`: User ID
- **Query Parameters:**
  - `page`: Page number (defaults to 1)
  - `limit`: Number of results per page (defaults to 10, or returns all if omitted)
- **Response:**
  ```json
  {
    "tasks": [ ... ],  // Array of tasks for the user
    "total": 50,       // Total number of tasks for the user
    "page": 1,         // Current page
    "limit": 10        // Limit of tasks per page
  }
  ```
  Pagination is also supported, you can use the `page` and `limit` parameters to get the next or previous page of tasks or omit them to get all the tasks for the user.

### 3. Get Task by ID

- **Method:** `GET`
- **Route:** `/api/tasks/:id`
- **URL Params:**
  - `id`: Task ID
- **Response:**
  ```json
  {
    "task": { ... },  // Task object
  }
  ```

### 4. Add Task

- **Method:** `POST`
- **Route:** `/api/tasks`
- **Request Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "status": "todo", // Possible values: done, inProgress, todo
    "userId": 1, // User ID
    "parentTaskId": null, // Parent task ID
    "deadline": null, // Date object
    "priority": 1 // Priority of the task
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Task title",
    "description": "Task description",
    "status": "todo",
    "userId": 1,
    "parentTaskId": null,
    "deadline": "2024-12-31T23:59:59",
    "createdAt": "2024-01-01T12:00:00",
    "updatedAt": "2024-01-01T12:00:00"
  }
  ```

### 5. Update Task

- **Method:** `PUT`
- **Route:** `/api/tasks/:id`
- **URL Params:**
  - `id`: Task ID
- **Request Body:**
  ```json
  {
    "title": "New Task Title",
    "description": "New Task Description",
    "status": "todo",
    "userId": 1,
    "parentTaskId": null,
    "deadline": null,
    "priority": 1
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "New title",
    "description": "New description",
    "status": "inProgress",
    "userId": 1,
    "parentTaskId": null,
    "deadline": "2024-12-31T23:59:59",
    "createdAt": "2024-01-01T12:00:00",
    "updatedAt": "2024-01-02T12:00:00"
  }
  ```

### 6. Delete Task

- **Method:** `DELETE`
- **Route:** `/api/tasks/:id`
- **URL Params:**
  - `id`: Task ID
- **Response:**
  ```json
  {
    "message": "Task deleted successfully"
  }
  ```

# Requirements

- Node.js
- MySQL (I'm using docker to run the database at the moment)

# Installation

1. Clone the repository
   ```bash
    git clone https://github.com/FacuBotta/Task-Management-API.git
    cd Task-Management-API
   ```
2. Install dependencies
   ```bash
    npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```bash
    SERVER_PORT=3000
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=your_database_user
    DB_PASSWORD=your_password
    DB_NAME=your_database_name
   ```
4. Start the server
   ```bash
    npm run tsc // Compile the TypeScript files
    npm run start // Start the server
    // or
    npm run dev // Start the server in development mode
   ```
5. You wil get a message like this:
   ![consoleCapture](./files/consoleCapure.png)

6. ## Let me a ⭐️ if you liked it 😊
