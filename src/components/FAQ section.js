import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="faq">
      <h2 className="faq-title">
                 <span className="highlight">Got questions? </span>We have all your answers!
      </h2>
      {[1, 2, 3, 4].map((item, index) => (
        <Question
          key={index}
          index={index}
          isSelected={selectedQuestion === index}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </div>
  );
};

const Question = ({ index, isSelected, toggleQuestion }) => (
  <div className="question" onClick={() => toggleQuestion(index)}>
    <div className="question-text">
      Office ipsum you must be muted. Muted one win users see while every hard teeth kpis?
    </div>
    <div className="question-toggle">
      {isSelected ? '-' : '+'}
    </div>
    {isSelected && <Answer />}
  </div>
);

const Answer = () => (
  <div className="answer">
    This is the answer to the question.
  </div>
);

export default FAQ;
