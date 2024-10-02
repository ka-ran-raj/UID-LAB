import React, { useState } from 'react';
import './AnimatedText.css';

function AnimatedText({ text }) {
  const [clickedLetterIndex, setClickedLetterIndex] = useState(null);

  const handleClick = (index) => {
    setClickedLetterIndex(index); // Set clicked letter index
  };

  const animatedLetters = text.split('').map((letter, index) => (
    <span
      key={index}
      className={index === clickedLetterIndex ? 'clicked' : ''}
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => handleClick(index)}
    >
      {letter}
    </span>
  ));

  return (
    <div className="animated-text">
      {animatedLetters}
    </div>
  );
}

export default AnimatedText;
