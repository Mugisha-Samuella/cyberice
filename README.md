# CyberIce App

CyberIce is a comprehensive web application designed to manage user registrations, logins, and handle security threats. This project integrates a frontend built with React and a backend built with Node.js and Express, connected to a MongoDB database.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration and Authentication**: Users can register and login with secure password hashing.
- **CRUD Operations for Security Threats**: Users can create, read, update, and delete security threat records.
- **Loading Screen**: Displays a loading screen before confirming the backend server is running.
- **Responsive Design**: The frontend is built with responsiveness in mind.

## Demo

A live demo of the application can be accessed [here](#).

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/cyberice.git
   cd cyberice
   ```

2. **Install dependencies for both frontend and backend**:
   ```bash
   # Navigate to the backend folder
   cd backend
   npm install

   # Navigate to the frontend folder
   cd ../frontend
   npm install
   ```

3. **Set up MongoDB**:
   Make sure you have MongoDB installed and running. The application expects MongoDB to be running on `mongodb://localhost:27017/cybericedb`.

4. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

5. **Start the frontend development server**:
   ```bash
   cd ../frontend
   npm start
   ```

## Usage

Once both servers are running, you can access the application at `http://localhost:3000`.

### User Registration

- Navigate to the SignUp page to create a new account.

### User Login

- Navigate to the Login page to access your account.

### Managing Security Threats

- After logging in, you can access the ThreatDashboard to create, view, update, or delete security threats.

## API Endpoints

### User Endpoints

- **POST /signup**: Register a new user
- **POST /login**: Authenticate a user and login

### Security Threat Endpoints

- **POST /threats**: Create a new security threat
- **GET /threats**: Retrieve all security threats
- **PUT /threats/:id**: Update a specific security threat
- **DELETE /threats/:id**: Delete a specific security threat

### Health Check Endpoint

- **GET /health**: Check if the backend server is running

## Project Structure

```
cyberice/
├── backend/
│   ├── models/
│   │   ├── FormData.js
│   │   └── SecurityThreat.js
│   ├── routes/
│   ├── app.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── Pages/
    │   │   ├── Home.js
    │   │   ├── Services.js
    │   │   ├── Resources.js
    │   │   ├── Blog.js
    │   │   ├── SignUp.js
    │   │   ├── Login.js
    │   │   ├── ThreatDashboard.js
    │   │   ├── ForgotPassword.js
    │   │   └── Loading.js
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
