import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [rotatingButton, setRotatingButton] = useState(null);

  const handleClick = (value, buttonIndex) => {
    setInput(input + value);
    setRotatingButton(buttonIndex);
    setTimeout(() => setRotatingButton(null), 500); // Reset rotation after animation duration
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        <div className="text-right mb-6 p-4 bg-gray-800 rounded-lg text-white text-3xl shadow-inner">
          {input || '0'}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={handleClear}
            className={`col-span-2 bg-red-500 text-white p-4 rounded-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-110 ${rotatingButton === 'clear' ? 'rotate-180' : ''}`}
          >
            C
          </button>
          <button
            onClick={() => handleClick('/', 'divide')}
            className={`bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-green-500 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ${rotatingButton === 'divide' ? 'rotate-180' : ''}`}
          >
            /
          </button>
          <button
            onClick={() => handleClick('*', 'multiply')}
            className={`bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-green-500 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ${rotatingButton === 'multiply' ? 'rotate-180' : ''}`}
          >
            *
          </button>
          <button
            onClick={() => handleClick('7', 'seven')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'seven' ? 'rotate-180' : ''}`}
          >
            7
          </button>
          <button
            onClick={() => handleClick('8', 'eight')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'eight' ? 'rotate-180' : ''}`}
          >
            8
          </button>
          <button
            onClick={() => handleClick('9', 'nine')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'nine' ? 'rotate-180' : ''}`}
          >
            9
          </button>
          <button
            onClick={() => handleClick('-', 'subtract')}
            className={`bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-green-500 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ${rotatingButton === 'subtract' ? 'rotate-180' : ''}`}
          >
            -
          </button>
          <button
            onClick={() => handleClick('4', 'four')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'four' ? 'rotate-180' : ''}`}
          >
            4
          </button>
          <button
            onClick={() => handleClick('5', 'five')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'five' ? 'rotate-180' : ''}`}
          >
            5
          </button>
          <button
            onClick={() => handleClick('6', 'six')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'six' ? 'rotate-180' : ''}`}
          >
            6
          </button>
          <button
            onClick={() => handleClick('+', 'add')}
            className={`bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-green-500 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ${rotatingButton === 'add' ? 'rotate-180' : ''}`}
          >
            +
          </button>
          <button
            onClick={() => handleClick('1', 'one')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'one' ? 'rotate-180' : ''}`}
          >
            1
          </button>
          <button
            onClick={() => handleClick('2', 'two')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'two' ? 'rotate-180' : ''}`}
          >
            2
          </button>
          <button
            onClick={() => handleClick('3', 'three')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'three' ? 'rotate-180' : ''}`}
          >
            3
          </button>
          <button
            onClick={handleCalculate}
            className={`row-span-2 bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-110 ${rotatingButton === 'equals' ? 'rotate-180' : ''}`}
          >
            =
          </button>
          <button
            onClick={() => handleClick('0', 'zero')}
            className={`col-span-2 bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'zero' ? 'rotate-180' : ''}`}
          >
            0
          </button>
          <button
            onClick={() => handleClick('.', 'decimal')}
            className={`bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-110 ${rotatingButton === 'decimal' ? 'rotate-180' : ''}`}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
