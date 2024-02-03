import React, { useEffect, useState } from "react";
import "./style.css";

function 
Calculator() {
  var [number1, setNumber1] = useState(0);
  var [number2, setNumber2] = useState(0);

  

  var [addition, setAddition] = useState(0);
  var [subtraction, setSubtraction] = useState(0);
  var [multiply, setMultiply] = useState(0);
  var [division, setDivision] = useState(0);

  function firstNumber(event) {
    number1 = Number(event.target.value);
    setNumber1(number1);
  }
  function secondNumber(event) {
    number2 = Number(event.target.value);
    setNumber2(number2);
  }

  function additionfunction(event) {
    if(event!=null){
    event.preventDefault();
  }


    addition = number1 + number2;
    setAddition(addition);

  }
  function subtractionfunction(event) {
     
    if(event!=null){
      event.preventDefault();
    }

    subtraction = number1 - number2;
    setSubtraction(subtraction);
  }
  function multiplyfunction(event) {
    if(event!=null){
      event.preventDefault();
    }

    multiply = number1 * number2;
    setMultiply(multiply);
  }
  function divisionfunction(event) {
    if(event!=null){
      event.preventDefault();
    }
  }

  

  useEffect(additionfunction,[number1,number2]);
  useEffect(subtractionfunction,[number1,number2]);
 
  useEffect(multiplyfunction,[number1,number2]);
  useEffect(divisionfunction,[number1,number2]);

  

  return (
    <>
      <form id="userInputForm">
    <div id='labelClass'>
        <label for="firstNumber">Enter a First Number:</label>
        <input type="number" name="userNumber" onChange={firstNumber} required />

        <label for="secondNumber">Enter a Second Number:</label>
        <input type="number" name="userNumber" onChange={secondNumber} required />

    </div>

        <p>Addition result={addition}</p>
        <p>subtraction result={subtraction}</p>
        <p>Multiply result={multiply}</p>
        <p>division result={division}</p>

        <button onClick={additionfunction} className="button">
          addition
        </button>
        <button onClick={subtractionfunction} className="button">
          subtraction
        </button>
        <button onClick={multiplyfunction} className="button">
          multiply
        </button>
        <button onClick={divisionfunction} className="button">
          division
        </button>
      </form>
    </>
  );
}

export default Calculator;
