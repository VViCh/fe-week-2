const FlashCard = ({ question, answer, difficulty, isRevealed, onClick }) => {
  return (
    <div
      className={`flashCard ${isRevealed ? difficulty.toLowerCase() : ""}`}
      onClick={onClick}
    >
      {isRevealed ? (
        <>
          <div className="flashCardAnswerHeader">
            <p className="answerLabel">Answer:</p>
            <p className={`badge ${difficulty.toLowerCase()}`}>{difficulty}</p>
          </div>
          <h2 className="question">{question}</h2>
          <p className="answer">{answer}</p>
        </>
      ) : (
        <>
          <p className="questionLabel">Question 1</p>
          <h2 className="question">{question}</h2>
          <p className={`badge ${difficulty.toLowerCase()}`}>{difficulty}</p>
        </>
      )}
    </div>
  );
};

export default FlashCard;
