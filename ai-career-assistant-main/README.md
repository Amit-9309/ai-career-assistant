# 🚀 AI Career Assistant

An AI-powered career guidance web application that helps users discover suitable career paths based on their skills, education, and interests. The application also supports resume analysis and provides AI-generated career recommendations.

---

## ✨ Features

* 🤖 AI-powered career recommendations
* 📄 Resume upload and analysis
* 🧠 Personalized career guidance
* 📚 Learning roadmap suggestions
* 🎨 Modern React frontend with a space-themed UI
* ⚡ FastAPI backend with REST APIs
* 🔗 Frontend and backend integration

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript

### Backend

* Python
* FastAPI
* Pydantic

### AI

* Google Gemini API

### Other Tools

* Git
* GitHub
* REST API
* Swagger UI

---

## 📂 Project Structure

```
AI-Career-Assistant
│
├── Backend
│   ├── main.py
│   ├── models.py
│   ├── career_engine.py
│   ├── ai_engine.py
│   ├── resume_engine.py
│   └── uploads/
│
├── Frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── components/
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Career-Assistant.git
```

---

### Backend Setup

```bash
cd ai-career-assistant-main

cd Backend


$env:GEMINI_API_KEY="Add your api key here"

python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload


```

Backend will start at:

```
http://127.0.0.1:8000
```

Swagger API Documentation:

```
http://127.0.0.1:8000/docs
```

---

### Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

Frontend will start at:

```
http://localhost:5173
```

---

## 📌 How It Works

1. User enters:

   * Name
   * Skills
   * Education
   * Interests

2. Frontend sends data to the FastAPI backend.

3. Backend processes the request.

4. AI generates personalized career recommendations.

5. The recommendation is displayed on the frontend.

---

## 📸 Screenshots

### Home Page

*Add screenshot here*

---

### AI Recommendation

*Add screenshot here*

---

### Resume Analysis

*Add screenshot here*

---

## 🔮 Future Improvements

* User Authentication
* Dashboard
* Career Roadmap Generator
* ATS Resume Score
* Download Career Report as PDF
* Chat Interface
* Dark/Light Theme
* Database Integration
* Job Recommendation Engine

---

## 👨‍💻 Author

**Sankalp Kumar Singh**

B.Tech Computer Science Engineering

Python | FastAPI | React.js | SQL | REST APIs | AI Enthusiast

GitHub: https://github.com/parmarsankapdev01



---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
