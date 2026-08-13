import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [interests, setInterests] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/career", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          skills: skills.split(","),
          education,
          interests: interests.split(","),
        }),
      });

      const data = await response.json();

      setResult(data.recommendation);
    } catch (error) {
      console.log(error);

      setResult("Unable to connect to AI server.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      {/* HERO */}
      <div className="hero">
        <h1>🚀 AI Career Mentor</h1>
        <p>Your Personal AI Powered Career Guide</p>
      </div>

      {/* STATS */}
      <div className="features">
        <div className="card">🤖 AI Career Guidance</div>
        <div className="card">📄 Resume Analysis</div>
        <div className="card">🛣️ Learning Roadmap</div>
      </div>

      {/* MAIN GRID */}
      <div className="main-grid">
        {/* LEFT SIDE */}
        <div>
          <div className="form-card">
            <h2>Generate Career Plan</h2>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />

            <input
              type="text"
              placeholder="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />

            <input
              type="text"
              placeholder="Interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />

            <button onClick={handleSubmit}>Generate Career Plan</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {loading && (
            <div className="loading">🤖 AI is analyzing your profile...</div>
          )}

          {result && (
            <div className="result-card">
              <h2>🎯 AI Recommendation</h2>
              <p>{result}</p>
            </div>
          )}

          <div className="roadmap-card">
            <h2>🛣️ Learning Roadmap</h2>

            <ul>
              <li>📘 Learn Python</li>
              <li>⚡ Learn FastAPI</li>
              <li>🗄️ Learn SQL</li>
              <li>🌐 Learn React</li>
              <li>🤖 Build AI Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
