import { useState } from "react";
import FlashCard from "./components/FlashCard";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [activeFlashCard, setActiveFlashCard] = useState(null);

  const toggleFlashCard = (index) => {
    setActiveFlashCard((prevIndex) => (prevIndex === null ? index : null));
  };

  const data = [
    {
      question: "What does a useEffect dependency array do?",
      answer: "Re-runs the useEffect function whenever any dependency changes.",
      difficulty: "Easy",
    },
    {
      question: "List all of React's Component Lifecycles!",
      answer:
        "A React Component has three lifecycle phases: mounting, updating and unmounting.",
      difficulty: "Medium",
    },
    {
      question: "What is a Higher Order Component?",
      answer:
        "A function that takes a component and returns an enhanced component version.",
      difficulty: "Hard",
    },
    {
      question: "What is The Compound Component Pattern?",
      answer:
        "A pattern enabling related components to share state implicitly, promoting flexible design.",
      difficulty: "Hard",
    },
    {
      question: "What is prop drilling and how to fix it?",
      answer:
        "Prop drilling refers to passing props through several layers; the Context API can streamline this.",
      difficulty: "Easy",
    },
    {
      question: "What is the usage of the useRef hook?",
      answer:
        "It maintains a mutable value between renders without causing re-renders, useful for DOM refs.",
      difficulty: "Medium",
    },
  ];

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
