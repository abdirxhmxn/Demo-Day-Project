# 🌙 Demo — Gamified Qur’an Learning Platform

> A work-in-progress **MERN stack** web app that transforms how students learn and engage with the Qur’an — blending education, motivation, and modern web design.

---

## 💡 Overview

**Demo** is an upcoming **learning platform** built for students studying the **Qur’an and Islamic studies**, designed to make learning **interactive, structured, and rewarding**.

The project focuses on **gamifying the learning experience** — turning memorization, recitation, and comprehension into engaging challenges, levels, and missions.

Students earn points, unlock achievements, and track progress — while teachers gain an intuitive dashboard to manage performance and curriculum milestones.

---

## 🧠 Vision

> “Knowledge is light — we just need to make the journey exciting.”

The goal is to create a platform that bridges **spiritual learning and modern technology**, helping students stay motivated while preserving the authenticity and adab of Qur’anic education.

---

## ⚙️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **State Management** | Context API / Redux (TBD) |
| **Authentication** | JWT + bcrypt |
| **Deployment (Planned)** | Vercel / Render / Railway |

---

## 🎮 Core Features (Planned & In Progress)

- 🧩 **Gamified Learning Flow** — Lessons, missions, and ranks tied to learning goals  
- 📖 **Student Dashboard** — Personalized view of progress, points, and achievements  
- 🕌 **Teacher Panel** — Manage classes, add assignments, and monitor student data  
- 🌙 **Spiritual Focus** — Centered on Qur’anic ethics and memorization progress  
- 🧠 **Progress Tracking** — Real-time XP and performance metrics  
- 🪶 **Reward System** — Students level up based on recitation, memorization, and participation  

---

## 🛠️ Installation & Setup

Clone the repository:
```bash
git clone https://github.com/your-username/demo.git
cd demo
````

Install dependencies for both backend and frontend:

```bash
# Root setup
npm install

# If using client folder
cd client
npm install
```

Run the development servers:

```bash
# Backend
npm run server

# Frontend
npm run dev
```

Access the app at:

```
Frontend → http://localhost:5173
Backend  → http://localhost:8000
```

---

## 🧩 Project Structure

```
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI
│   │   ├── pages/        # Page views (Login, Dashboard, Missions)
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/               # Express backend
│   ├── routes/           # API routes (auth, students, missions)
│   ├── models/           # MongoDB schemas
│   ├── controllers/      # Logic handlers
│   ├── middleware/       # Auth / validation
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚧 Roadmap

* [x] Initial project scaffolding
* [ ] Setup MongoDB and user model
* [ ] Create auth and user routes
* [ ] Build dashboard prototype
* [ ] Add gamification logic (XP, ranks, achievements)
* [ ] Connect frontend and backend
* [ ] Deploy full MERN app

---

## 👤 Developer

**Abdirahman Mohamed (MC)**
Founder of **Al Bayaan Institute** — building bridges between **faith and technology**.
💻 [GitHub](https://github.com/abdirxhmxn)
🌐 [Portfolio](https://mcdigitalservices.pro)
📧 [abdirahman.mohamed@maine.edu](mailto:abdirahman.mohamed@maine.edu)

---

## 📜 License

This project is open source and available under the **MIT License**.

---

> “Teach with purpose. Build with intention. Inspire through design.”


