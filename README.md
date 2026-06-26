# ðŸŒ´ Siwa Oasis - Smart Tourism Platform (Backend API)

<div align="center">
  <img src="https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-darkgreen?style=for-the-badge&logo=node.js" alt="Node Express" />
  <img src="https://img.shields.io/badge/Database-MySQL%20%7C%20Sequelize-blue?style=for-the-badge&logo=mysql" alt="MySQL Sequelize" />
  <img src="https://img.shields.io/badge/AI-Chatbot%20Integration-orange?style=for-the-badge" alt="AI Guide" />
</div>

## ðŸ“Œ Overview (Description)
This is the production-grade API backend for the **Siwa Oasis Smart Tourism Platform**. Built with Node.js and Express, it provides full RESTful endpoints for booking transport, planning custom trips, administrative dashboard reporting, and integration with AI assistants.

---

## âœ¨ Key Features
*   **Secure Authentication**: Role-based access control (User/Admin) via JWT.
*   **Trip & Destination Management**: Full CRUD endpoints for sightseeing locations.
*   **Bus Ticket Reservation**: Booking, status updates, capacity check, and reservation tracking.
*   **AI Chatbot Engine**: Manages messaging telemetry, context history tracking, and AI response queries.
*   **Structured Logging**: Production logging of request payloads and exceptions.

---

## ðŸ› ï¸ Tech Stack
*   **Runtime**: Node.js (v18+)
*   **Framework**: Express.js
*   **ORM**: Sequelize
*   **Database**: MySQL
*   **Architecture**: Modular (Controller -> Service -> Model)

---

## ðŸ“ Database Architecture (Sequelize Models)
`	ext
Users <â”€â”€â”€> Bookings (Bus)
Users <â”€â”€â”€> TripPlans <â”€â”€â”€> Places
Users <â”€â”€â”€> ChatHistories (AI)
`

---

## âš™ï¸ Environment Variables
Configure a .env file in the root backend directory:
`ini
PORT=3000
DB_HOST=127.0.0.1
DB_NAME=siwa_oasis
DB_USER=root
DB_PASS=yourpassword
JWT_SECRET=your_super_jwt_secret_key
AI_API_KEY=your_gemini_or_openai_api_key
`

---

## ðŸ“‚ Folder Structure
`	ext
siwa-oasis-backend/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ config/             # DB configurations and environment loaders
â”‚   â”œâ”€â”€ controllers/        # Handles API requests and routes
â”‚   â”œâ”€â”€ middlewares/        # JWT validation and roles checks
â”‚   â”œâ”€â”€ models/             # Sequelize database models
â”‚   â”œâ”€â”€ services/           # Reusable business logic layers
â”‚   â””â”€â”€ app.js              # Application entry point
â”œâ”€â”€ package.json            # Node dependencies list
â””â”€â”€ README.md               # Documentation
`

---

## ðŸš€ Installation & Local Setup

### ðŸ“‹ Prerequisites
*   Node.js installed locally.
*   Running MySQL database instance.

### âš™ï¸ Steps
1.  Clone the repository:
    `ash
    git clone https://github.com/Siwa-Oasis-Org/backend.git
    cd backend
    `
2.  Install dependencies:
    `ash
    npm install
    `
3.  Configure database connection in .env.
4.  Run database migrations (Sequelize sync):
    `ash
    npm run migrate
    `
5.  Start the development server:
    `ash
    npm run dev
    `

---

## ðŸ”Œ API Endpoints

| Endpoint | Method | Action | Auth Required |
| :--- | :---: | :--- | :---: |
| /api/auth/register | POST | Registers new traveler | No |
| /api/auth/login | POST | Authenticates and returns JWT | No |
| /api/places | GET | Lists tourist destinations | No |
| /api/bookings | POST | Books a new bus reservation | Yes (User) |
| /api/ai/chat | POST | Submits prompt to AI guide | Yes (User) |
| /api/admin/summary | GET | Telemetry logs for admin | Yes (Admin) |

---

## ðŸ‘¥ Contributors
*   **Sayed Herzallah** - Lead Backend Developer.

---

## ðŸ“„ License
This project is licensed under the **MIT License**.
