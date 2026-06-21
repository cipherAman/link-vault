# Link Vault

Link Vault is a full-stack web application designed to help users securely store and manage their personal or professional links. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides a clean, responsive interface and secure user authentication.

## 🚀 Features

- **User Authentication:** Secure signup and login using JSON Web Tokens (JWT) and bcrypt password hashing.
- **Link Management:** Create, view, update, and delete stored links.
- **Responsive UI:** Modern, clean frontend built with React, Vite, and Tailwind CSS.
- **RESTful API:** Robust Node.js and Express backend providing CRUD operations.
- **Database:** MongoDB for efficient data storage.

## 🛠️ Tech Stack

### Frontend (`/client`)
- **React.js** (via Vite)
- **Tailwind CSS** for styling
- **React Router DOM** for navigation
- **Axios** for API requests

### Backend (`/server`)
- **Node.js & Express.js**
- **MongoDB** (with Mongoose ODM)
- **JSON Web Tokens (JWT)** for authentication
- **Bcrypt.js** for password encryption

## 📂 Project Structure

```text
link-vault/
├── client/          # React frontend application
└── server/          # Node.js/Express backend API
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance (local or MongoDB Atlas).

### 1. Clone the repository
```bash
git clone https://github.com/cipherAman/link-vault.git
cd link-vault
```

### 2. Backend Setup
Navigate to the server directory, install dependencies, and configure environment variables.

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:
```bash
npm start
```
*(The server will run on `http://localhost:5000`)*

### 3. Frontend Setup
Open a new terminal window, navigate to the client directory, and install dependencies.

```bash
cd client
npm install
```

Start the React development server:
```bash
npm run dev
```
*(The frontend will typically run on `http://localhost:5173`)*

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
