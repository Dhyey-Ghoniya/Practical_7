# Practical 7: Authentication and Middleware Pipeline

**Student Name:** Ghoniya Dhyey  
**Student ID:** 24CS024  
**Subject:** ITUE301 - AWDF (Advanced Web Development Frameworks)  
**Academic Year:** 2025-26  
**Institution:** Charotar University of Science and Technology (CHARUSAT), CSPIT  

---

## 🎯 Aim
To implement JWT-based authentication and input validation as part of an Express middleware pipeline, securing endpoints with bearer token validation and bcrypt password hashing.

## 🛠️ Tech Stack
- **Runtime:** Node.js + Express.js
- **Security:** JSON Web Tokens (`jsonwebtoken`), Password Hashing (`bcryptjs`)
- **Architecture:** Middleware Pipeline Pattern (Validation -> Authentication -> Controller -> Error Handler)

## 📂 Project Structure
```
Practical_7/
├── src/
│   ├── config/
│   │   └── keys.js               # JWT secrets and expiry configuration
│   ├── controllers/
│   │   ├── authController.js     # Register, login, profile logic
│   │   └── taskController.js     # Protected resource handlers
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT Bearer token verification
│   │   ├── validateMiddleware.js # Input sanitization & validation
│   │   └── errorMiddleware.js    # Global centralized error handler
│   ├── routes/
│   │   ├── authRoutes.js         # Public auth endpoints
│   │   └── taskRoutes.js         # Protected task endpoints
│   └── app.js                    # Express app configuration
├── server.js                     # Server entry point
├── test_api.js                   # Verification test runner
├── package.json
└── README.md
```

## 🚀 Getting Started
```bash
npm install
npm start
```
