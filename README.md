# CipherStudio

CipherStudio is a full-stack web-based code editor (IDE) built with **React.js** on the frontend and **Node.js + Express + MongoDB** on the backend. It allows users to create, edit, save, load, and manage JavaScript files and projects online.

---

## 🚀 Features

- User authentication: Login and registration.
- Create, rename, and delete code files.
- Save projects to backend (MongoDB) and load them anytime.
- Update existing projects seamlessly.
- Autosave functionality for local backups.
- Theme toggle: Light/Dark mode.
- Logout functionality.
- Responsive and intuitive UI with file explorer and code editor.

---

## 🗂 Project Structure

cipherstudio/
├── backend/ # Node.js + Express backend
│ ├── models/ # MongoDB models
│ │ └── Project.js
│ ├── routes/ # API routes
│ │ └── projects.js
│ ├── server.js # Express server entry point
│ ├── package.json
│ ├── package-lock.json
│ ├── node_modules/
│ └── .env # MongoDB URI and PORT
│
├── client/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/ # Navbar, Editor, FileExplorer, etc.
│ │ ├── pages/ # Login & Register pages
│ │ ├── utils/ # storage.js for backend API calls
│ │ ├── App.js
│ │ ├── index.js
│ │ └── App.css
│ ├── package.json
│ ├── package-lock.json
│ └── node_modules/
│
├── .gitignore
└── README.md

---


Frontend will run at http://localhost:3000

Backend API runs at http://localhost:5000

---

## 🖥 Usage

Open the app in your browser.

Register or login.

Create new files or edit existing files.

Use Save to store your project in MongoDB.

Load a project by entering its ID.

Update an existing project.

Toggle autosave or theme as needed.

---

## 📌 Notes

MongoDB Atlas is used as the database.

Autosave stores files locally as a fallback.

The project is designed as a full-stack React + Node.js application.
