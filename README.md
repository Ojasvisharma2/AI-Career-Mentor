# 🤖 AI-CareerMentor

> Your AI-powered career companion for resumes, interviews, career roadmaps, mentorship, and job tracking.

AI-CareerMentor is a full-stack web application designed to help students and job seekers prepare for their careers using AI-powered tools.

The platform combines resume analysis, AI interview practice, personalized career roadmaps, career mentorship, and job application tracking in one place.

---

## ✨ Features

### 📝 AI Resume Optimizer

- Upload your resume in PDF format
- Extract resume content automatically
- Analyze resume quality using AI
- Identify strengths and weaknesses
- Suggest ATS-friendly improvements
- Recommend relevant keywords and formatting improvements

### 🎤 Smart Interview Coach

- Practice AI-powered mock interviews
- Get questions based on your career/role
- Receive AI-generated feedback
- Improve interview communication and answers

### 🗺️ Career Roadmap AI

- Enter your career goal
- Generate a personalized learning roadmap
- Get recommended skills and milestones
- Follow a structured path toward your target role

### 👔 24/7 Career Mentor

- Ask career-related questions
- Get AI-powered guidance
- Receive advice about skills, projects, interviews, and career planning

### 📋 Smart Job Tracker

- Track job applications
- Store company and job details
- Track application status
- Manage deadlines and follow-ups

### 🔐 Authentication

- User registration and login
- JWT-based authentication
- Protected routes
- Secure user-specific data

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Axios
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- PDF parsing

### AI

- Groq API
- OpenRouter API

### Tools & Deployment

- Git
- GitHub
- Vercel
- Render
- MongoDB Atlas

---

## 🏗️ Project Architecture

```text
AI-CareerMentor
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

🔄 Application Flow
User
│
▼
React Frontend
│
│ Axios / HTTP
▼
Node.js + Express
│
┌──────────┼──────────┐
▼ ▼ ▼
MongoDB AI APIs PDF Parser
Atlas
│ │
└──────────┼──────────┘
▼
AI Response
│
▼
React Frontend
│
▼
User Result
🔐 Authentication Flow
User
│
▼
Login/Register
│
▼
Express API
│
▼
MongoDB
│
▼
JWT Token
│
▼
Frontend
│
▼
Protected Routes

Protected features require authentication before accessing user-specific data.

📄 Resume Analysis Flow
User uploads PDF
│
▼
Multer receives file
│
▼
PDF Parser extracts text
│
▼
AI API analyzes resume
│
▼
Feedback generated
│
▼
Result displayed to user
│
▼
AI log stored in MongoDB

Uploaded resume files are processed temporarily and removed after analysis.

🤖 AI Integration

AI-CareerMentor integrates multiple AI services for different AI-powered features.

AI is used for:

Resume analysis
Interview feedback
Career roadmap generation
Career mentorship
Personalized recommendations

API keys are stored using environment variables and are never committed to the repository.

⚙️ Installation & Setup

1. Clone the repository
   git clone https://github.com/Ojasvisharma2/Ai-Career-Mentor.git
   cd Ai-Career-Mentor
2. Install frontend dependencies
   cd frontend
   npm install
3. Install backend dependencies

Open another terminal:

cd backend
npm install
🔑 Environment Variables
Backend

Create:

backend/.env

Add the required environment variables:

PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GROQ_API_KEY=your_groq_api_key

OPENROUTER_API_KEY=your_openrouter_api_key

GEMINI_API_KEY=your_gemini_api_key

Do not commit .env to GitHub.

Frontend

Create:

frontend/.env

For local development:

VITE_BACKEND_URL=http://localhost:3000/

For production, use your deployed Render backend URL:

VITE_BACKEND_URL=https://your-backend.onrender.com/
▶️ Running Locally
Start Backend
cd backend
npm start

Backend runs on:

http://localhost:3000
Start Frontend

Open another terminal:

cd frontend
npm run dev

Frontend runs on:

http://localhost:5173
🌐 Deployment
Frontend

The frontend can be deployed using:

Vercel

Build command:

npm run build

Output directory:

dist

Root directory:

frontend
Backend

The backend can be deployed using:

Render

Root directory:

backend

Build command:

npm install

Start command:

npm start

Required environment variables must be added through Render's environment variable settings.

🗄️ Database

The application uses MongoDB Atlas for storing:

User accounts
Authentication information
Job tracker data
AI interaction logs
Resume analysis results
🔒 Security

The project follows basic security practices including:

JWT authentication
Protected API routes
Environment variables for secrets
CORS configuration
Password hashing
Temporary resume file processing
.env excluded from Git
📱 Main Application Routes
Route Description
/ Landing page / Home
/login User login
/register User registration
/dashboard User dashboard
/resume AI Resume Optimizer
/interview Smart Interview Coach
/roadmap Career Roadmap AI
/mentor Career Mentor
/jobs Smart Job Tracker
🚀 Future Improvements
Advanced ATS scoring
Resume templates
LinkedIn profile optimization
Job recommendation engine
Voice-based AI interviews
Interview performance analytics
Skill-gap analysis
Real-time job API integration
Email reminders for job applications
More AI model integrations
🎯 Project Objective

The goal of AI-CareerMentor is to provide students and job seekers with an accessible AI-powered platform that brings multiple career preparation tools together.

Instead of using separate platforms for resumes, interview preparation, career planning, mentorship, and job tracking, users can access these features from a single application.

👩‍💻 Author

Ojasvi Sharma

B.Tech Information Technology

Built with ❤️ using React, Node.js, MongoDB and AI.
