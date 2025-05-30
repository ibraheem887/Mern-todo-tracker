# MERN Todo Tracker

A full-stack todo application built with the MERN stack (MongoDB, Express, React, Node.js).


## Features

- Create, complete, and delete tasks
- Persistent storage with MongoDB
- Responsive design that works on mobile and desktop
- Clean, intuitive user interface
- React Router for seamless navigation

## Tech Stack

**Frontend:**
- React 18
- React Router 6
- Vite (for fast development)
- Bootstrap 5 (for styling)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests
- dotenv for environment variables

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or Atlas)


### Clone the Repository

git clone https://github.com/yourusername/mern-todo-tracker.git
cd mern-todo-tracker


### Backend Setup

cd backend
npm install


Create a `.env` file in the backend directory with the following:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todoapp

Replace the MONGO_URI with your MongoDB connection string if using Atlas.

Start the backend server:

npm start


### Frontend Setup

cd ../frontend
npm install


Start the frontend development server:

npm run dev


The application will be available at http://localhost:5173

## Usage

1. Navigate to the home page to see an introduction
2. Go to the Todos page to view, add, complete, or delete tasks
3. Add new tasks using the form at the top of the Todos page
4. Mark tasks as complete by clicking the checkbox
5. Delete tasks using the delete button

## Project Structure

- `backend/` - Express server and MongoDB connection
  - `routes/` - API endpoints
  - `models/` - Mongoose schemas
  - `server.js` - Server entry point

- `my-react-app/` - React frontend
  - `src/components/` - Reusable UI components
  - `src/pages/` - Page components
  - `src/utils/` - Helper functions
  - `src/App.jsx` - Main component with routing

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

