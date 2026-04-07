# Task Manager API 🚀

## 📌 Description

A full-featured REST API for managing tasks, built with Node.js, Express, and TypeScript.

Includes authentication, authorization, and full CRUD functionality.

---

## 🛠️ Technologies

* Node.js
* Express
* TypeScript
* MongoDB
* Mongoose
* JWT
* bcrypt

---

## ⚙️ Features

* User registration & login
* JWT authentication
* Protected routes
* Create, read, update, delete tasks
* Task filtering & pagination
* Secure password hashing

---

## 📦 Installation

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=4000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
```

---

## ▶️ Run Project

```bash
npm run dev
```

---

## 🔗 API Endpoints

### Auth

* POST `/auth/register`
* POST `/auth/login`

### Tasks (Protected)

* GET `/tasks`
* POST `/tasks`
* PUT `/tasks/:id`
* DELETE `/tasks/:id`

---

## 🧠 Author

Angel Garcia
