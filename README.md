# InterviewIQ.AI

AI-powered mock interview platform that helps candidates prepare for technical and HR interviews through AI-generated questions, automated evaluation, detailed analytics, and downloadable performance reports.

## 🚀 Features

* Resume Analysis using AI
* AI-Generated Interview Questions
* Technical & HR Interview Modes
* Real-Time Answer Evaluation
* Confidence, Communication & Correctness Scoring
* Interview Analytics Dashboard
* Interview History Tracking
* PDF Report Download
* Secure Authentication (JWT)
* Razorpay Payment Integration
* Credit-Based Interview System

## 🛠 Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer

### AI Services

* OpenRouter API

### Payments

* Razorpay

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/InterviewIQ.AI.git
cd InterviewIQ.AI
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file from `.env.example`.

### Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
CLIENT_URL=http://localhost:5173
```

### Frontend

```env
VITE_API_URL=http://localhost:5000
```

## 🌟 Future Enhancements

* Voice-Based Interviews
* AI Avatar Interviewer
* Company-Specific Interview Preparation
* Multi-Language Support
* Interview Recording & Playback

## 👨‍💻 Author

Dishant Hirapara

Computer Engineering Student | MERN Stack Developer

## 📄 License

MIT License
