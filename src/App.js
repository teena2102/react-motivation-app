import React, { useEffect, useState } from "react";
import "./App.css";

const adviceList = [
  "Believe in yourself.",
  "Consistency beats motivation.",
  "Small steps daily create big results.",
  "Learn something new every day.",
  "Focus on progress, not perfection.",
  "Discipline creates freedom.",
  "Stay patient and trust the process.",
  "Action cures fear.",
  "Dream big. Start small.",
  "Your only limit is you.",
];

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    setAdvice(adviceList[randomIndex]);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>

        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
