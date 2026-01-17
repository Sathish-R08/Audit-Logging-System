# Audit Logging System

A full-stack MERN application for managing and tracking audit logs.  
The project includes a React frontend and a Node.js + Express backend with MongoDB.

---

## Tech Stack

**Frontend**
- React
- JavaScript
- HTML, CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## Project Structure

Audit-logging-system
├── backend
│ ├── controllers
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── utils
│ ├── server.js
│ └── package.json
│
├── frontend
│ ├── public
│ ├── src
│ └── package.json
│
├── .gitignore
└── README.md

yaml
Copy code

---

## Requirements

- Node.js (LTS)
- npm
- Git
- MongoDB (Local or Atlas)

Check installations:
```bash
node -v
npm -v
git --version
Setup & Run
1. Clone Repository
bash
Copy code
git clone https://github.com/your-username/audit-logging-system.git
cd audit-logging-system
2. Backend Setup
bash
Copy code
cd backend
npm install
Create .env file inside backend:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
Run backend:

bash
Copy code
node server.js
Backend URL:

arduino
Copy code
http://localhost:5000
3. Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Frontend URL:

arduino
Copy code
http://localhost:3000
Running the App
Start backend first

Start frontend in a new terminal

Make sure both servers are running
