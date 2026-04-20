# MERN AI Flow App

A simple AI-powered flow app built with MongoDB, Express, React, and Node.js.

## What it does
Type a prompt, click Run Flow, and get an AI response. 
You can save the prompt and response to a database.

## Tech Stack
- React + React Flow (Frontend)
- Node.js + Express (Backend)
- MongoDB Atlas (Database)
- OpenRouter API (AI)

## How to run locally

### Backend
cd backend
npm install
create a .env file with:
  OPENROUTER_API_KEY=your_key
  MONGODB_URI=your_mongodb_uri
  PORT=5000
node server.js

### Frontend
cd frontend
npm install
create a .env file with:
  REACT_APP_BACKEND_URL=http://localhost:5000
npm start

 *Live Demo*
https://mern-task-frontend-v8im.onrender.com/
