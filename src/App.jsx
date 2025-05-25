import { useState } from "react";
import FlashCard from "./components/FlashCard";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { data } from "./constants/constants";

function App() {
  const [activeFlashCard, setActiveFlashCard] = useState(null);

  const toggleFlashCard = (index) => {
    setActiveFlashCard((prevIndex) => (prevIndex === null ? index : index === prevIndex ? null : index));
  };

  return (
    <div className="app">
      <div className="header">
        <p className="badge">From Beginner to Advanced Questions</p>
        <div className="title">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo" alt="React logo" />
          </a>
          <h1>The React Flash Cards</h1>
        </div>
        <p className="subtitle">
          Test your React knowledge by answering the flashcards below
        </p>
      </div>
      <div className="flashCardsContainer">
        {data.map((item, index) => (
          <FlashCard
            key={index}
            questionNumber={index + 1}
            question={item.question}
            answer={item.answer}
            difficulty={item.difficulty}
            isRevealed={activeFlashCard === index}
            onClick={() => toggleFlashCard(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
