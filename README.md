# Task Manager Application

## Description
This is a simple task manager application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to manage tasks by adding, updating, and marking them as completed.

## Features
- Add new tasks
- Mark tasks as completed
- List tasks with their status (Completed / Pending)
- Basic form validation for task title

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **CSS**: For basic styling

## Setup Instructions

### 1. Clone the Repository
Clone this repository to your local machine.

* In terminal
git clone <repo_url>
cd taskmanager
# Backend Setup
a. Install dependencies
Navigate to the backend folder and install the required dependencies.

* In terminal:
cd backend
npm install
b. Set up the database
Ensure you have MongoDB running on your local machine, or use a cloud service like MongoDB Atlas.

c. Start the Backend Server
Once the dependencies are installed, start the backend server.

* In terminal:
npm start
This will start the server on http://localhost:5000.
# Frontend Setup
a. Install frontend dependencies
Navigate to the frontend folder and install the required dependencies.


cd frontend
npm install
b. Start the React Development Server
After installing the dependencies, start the React development server.


npm start
This will start the frontend on http://localhost:3000.

# API List
GET /tasks: Retrieves all tasks.

POST /tasks: Adds a new task. Requires a title in the request body.

PUT /tasks/:id: Updates the status of a task (from Pending to Completed).

# Sample Requests
POST /tasks

{
  "title": "Finish Homework"
}
PUT /tasks/:id


{
  "status": "Completed"
}
## Screenshots

### Add New Task Page
Shows the form for adding new tasks.

![Add New Task](./images/taskform.png)

### Task List pending
Displays tasks with their current status.

![Task List](./images/before-complete.png)

### Task List after complete
Displays tasks with their current status.

![Task List](./images/after-complete.png)