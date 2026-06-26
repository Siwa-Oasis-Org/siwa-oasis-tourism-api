# 💻 Siwa Oasis Tourism API

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:059669&height=160&section=header&text=Siwa%20Tourism%20API&fontSize=42&fontColor=ffffff&fontFamily=Outfit" width="100%" />
</div>

<div align="center">
  ![Node.js](https://img.shields.io/badge/Node.js-v18-green?logo=nodedotjs&style=for-the-badge) ![Express.js](https://img.shields.io/badge/Express.js-v4-black?logo=express&style=for-the-badge) ![MySQL](https://img.shields.io/badge/MySQL-v8-blue?logo=mysql&style=for-the-badge) ![Sequelize](https://img.shields.io/badge/Sequelize-ORM-blue?logo=sequelize&style=for-the-badge) ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
</div>

---

## 📌 Project Overview (Description)
Enterprise-grade Express.js backend API powered by Sequelize and MySQL, handling booking logic, destination catalogs, and secure chatbot telemetry.

This codebase represents professional software development practices, Sequelize ORM database management, and robust Express routes.

---

## ⚡ The Engineering Challenge

### 🔴 Problem
Handling database persistence, mapping data schemas dynamically using Object-Relational Mappings (ORM) to relational databases, and validating user routes.

### 🟢 Solution
This project implements:
* **Sequelize Model Mappings**: Structured Sequelize database maps linking users, bookings, and chats.
* **Express Routing Framework**: Divided API sub-routers cleanly parsing incoming JSON data.
* **JWT Access Protections**: Custom authorization checkers verifying user request tokens.

---

## 🧬 System Architecture
The internal layout structures are separated logically:
```text
siwa-oasis-tourism-api/
├── src/
│   ├── config/          # Sequelize configuration and database connect
│   ├── controllers/     # Controller logic implementations
│   ├── models/          # Sequelize database tables mapping
│   ├── routes/          # Express route bindings
│   └── app.js           # Server application startup setup
├── package.json         # Node.js dependencies configuration
└── README.md            # System documentation
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| Node.js | Javascript backend runtime environment |
| Express.js | API routing framework |
| MySQL | Relational database |
| Sequelize | Database ORM mapper |

---

## 🚀 Local Developer Setup & Run

### 📋 Prerequisites
* Node.js v18+ and MySQL running instance

### ⚙️ Quick Start Steps
```bash
git clone https://github.com/Siwa-Oasis-Org/siwa-oasis-tourism-api.git
cd siwa-oasis-tourism-api
npm install
# Set database connections in configurations
npm run dev
```

---

## 🔮 Future Improvements
* [ ] Add unit testing suites (Jest / Supertest).
* [ ] Integrate Redis database for caching bookings.

---

## 👥 Contributors
* **Sayed Herzallah** - Lead Developer & Systems Architect

---

## 📄 License
Licensed under the **MIT License**.
