Velion Dynamics - Digital Knowledge Network (DKN)
University of West London Module: Mobile Web Component Development (CP70055E) Author: Arvin Alasvandian Shekari

📖 Project Overview
The Velion DKN is a full-stack Mobile Web Application designed to centralize organizational knowledge assets. Built as part of a Master's level coursework, this system addresses the need for a component-based architecture that supports a globally distributed workforce.

The application implements strict Role-Based Access Control (RBAC) to govern the lifecycle of knowledge assets, distinguishing between standard Consultants (Content Creators) and Knowledge Champions (Approvers).

🚀 Key Features
** decoupled Client-Server Architecture:** Built using the MERN stack principles (React.js frontend, Node.js backend).

Mobile-First Design: Responsive grid layout utilizing Bootstrap 5, ensuring seamless access across desktop and mobile devices.

Role-Based Access Control (RBAC):

Consultant Role: Can search, view, and upload assets. "Pending" items are read-only.

Knowledge Champion Role: Has administrative privileges to Approve pending assets, changing their status to "Published".

Strict Type Enforcement: Backend logic ensures data integrity using Enumerations for Asset Types (Report, Framework, Template) and Status Types.

Simulated AI Integration: Features a "Black Box" AI recommendation widget and mocked external API endpoints.

🛠️ Technology Stack
Frontend: React.js, Bootstrap 5, Axios

Backend: Node.js, Express.js

Architecture: MVC (Model-View-Controller), RESTful API

📂 Project Structure
Bash

Velion-DKN-System/
├── velion-dkn-frontend/    # React Client Application
│   ├── src/
│   │   ├── components/     # Reusable UI Components (KnowledgeCard, Navbar)
│   │   ├── pages/          # View Logic (Dashboard, Upload)
│   │   └── api/            # Axios Configuration
├── velion-dkn-backend/     # Node.js Server Application
│   ├── src/
│   │   ├── controllers/    # Business Logic
│   │   ├── models/         # Data Models & Validation
│   │   └── routes/         # API Endpoints
└── README.md
⚡ Getting Started
Follow these instructions to run the project locally.

Prerequisites
Node.js (v14 or higher)

npm (Node Package Manager)

1. Start the Backend Server
The backend runs on Port 5000.

Bash

cd velion-dkn-backend
npm install
node src/app.js
You should see: Server running on port 5000

2. Start the Frontend Client
Open a new terminal. The frontend runs on Port 3000.

Bash

cd velion-dkn-frontend
npm install
npm start
The application will automatically open at http://localhost:3000

🧪 How to Test the Logic (Demo)
Consultant View (Default):

Use the dropdown in the Navbar to select "Consultant".

Observe that assets marked as "Pending" show a "Pending Review" text. You cannot approve them.

Knowledge Champion View (Admin):

Switch the dropdown to "Knowledge Champion".

Observe that "Pending" assets now display a green "✓ Approve" button.

Clicking "Approve" updates the status to "Published" instantly.

📜 License
This project is for educational purposes as part of the MSc Software Engineering curriculum at the University of West London.