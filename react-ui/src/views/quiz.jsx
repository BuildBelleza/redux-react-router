import React, { useState } from 'react';


const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  
  

  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1)
    setResult((prev) =>
    selectedAnswer
      ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
      : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
  )
}

  

  

  return (
    <div>
    <h1>Quiz</h1>
    
      
      <button className="next" onClick={onClickNext}>Next</button>
      </div>
  )
};

export default Quiz;
