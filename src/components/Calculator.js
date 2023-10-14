import React, { useState } from 'react';
import './styles.css'

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const evaluateExpression = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleButtonClear = () =>{
    setExpression("");
  }

  const backSpace = () => {
    setExpression((prev)=> prev.slice(0,-1));    
};

  return (
    <div className="calculator">
      <div className="display">{expression}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')} className='operator'>/</button>
        <br />
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')} className='operator'>*</button>
        <br />
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')} className='operator'>-</button>
        <br />
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')} className='operator'>.</button>
        <button onClick={evaluateExpression} className='operator'>=</button>
        <button onClick={() => handleButtonClick('+')} className='operator'>+</button>
        <br />
        <button onClick={handleButtonClear}>CE</button>
        <button onClick={backSpace}>C</button>
      </div>
    </div>
  );
};

export default Calculator;