# ðŸŒ´ Siwa Oasis Tourism API - Smart Tourism Platform

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:0f172a&height=160&section=header&text=Siwa%20Oasis%20Tourism%20API&fontSize=38&fontColor=10b981&fontFamily=Outfit" width="100%" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-darkgreen?style=for-the-badge&logo=node.js" alt="Node Express" />
  <img src="https://img.shields.io/badge/Database-MySQL%20%7C%20Sequelize-blue?style=for-the-badge&logo=mysql" alt="MySQL Sequelize" />
  <img src="https://img.shields.io/badge/AI-Chatbot%20Integration-orange?style=for-the-badge" alt="AI Guide" />
</div>

## ðŸ“Œ Overview (Description)
**Siwa Oasis Tourism API** is the Express and Node.js RESTful backend that powers the Siwa Oasis Smart Tourism Platform. It handles bus bookings, custom trip plan configurations, database seeding, and AI travel chatbot history tracking.

---

## âœ¨ Key Features
*   **Secure Authentication**: Role-based access control (User/Admin) via JWT.
*   **Trip & Destination Management**: Full CRUD endpoints for sightseeing locations.
*   **Bus Ticket Reservation**: Booking, status updates, capacity check, and reservation tracking.

---

## ðŸ› ï¸ Tech Stack
*   **Runtime**: Node.js (v18+)
*   **Framework**: Express.js
*   **ORM**: Sequelize
*   **Database**: MySQL

---

## ðŸ“‚ Folder Structure
`	ext
siwa-oasis-tourism-api/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ config/             # DB configurations and environment loaders
â”‚   â”œâ”€â”€ controllers/        # Handles API requests and routes
â”‚   â”œâ”€â”€ models/             # Sequelize database models
â”‚   â”œâ”€â”€ services/           # Reusable business logic layers
â”‚   â””â”€â”€ app.js              # Application entry point
â”œâ”€â”€ package.json            # Node dependencies list
â””â”€â”€ README.md               # Documentation
`

---

## ðŸš€ Installation & Local Setup
1.  Clone the repository:
    `ash
    git clone https://github.com/Siwa-Oasis-Org/siwa-oasis-tourism-api.git
    cd siwa-oasis-tourism-api
    `
2.  Install dependencies:
    `ash
    npm install
    `
3.  Start the development server:
    `ash
    npm run dev
    `

---

## ðŸ“„ License
Licensed under the **MIT License**.
