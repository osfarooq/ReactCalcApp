import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result + e.target.name);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  const handleOperatorClick = (operator) => {
    setResult(result + operator);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="topBox">
          <a className="casio">C A S I O</a>
          <div className="sensor">| | | | | | | | |</div>
        </div>
        <input className="inputBox" type="text" value={result} />
        <div className="keypads">
          <div className="keypad1">
            <button name="1" onClick={handleClick}>
              1
            </button>
            <button name="2" onClick={handleClick}>
              2
            </button>
            <button name="3" onClick={handleClick}>
              3
            </button>
            <button name="4" onClick={handleClick}>
              4
            </button>
            <button name="5" onClick={handleClick}>
              5
            </button>
            <button name="6" onClick={handleClick}>
              6
            </button>
            <button name="7" onClick={handleClick}>
              7
            </button>
            <button name="8" onClick={handleClick}>
              8
            </button>
            <button name="9" onClick={handleClick}>
              9
            </button>
            <button name="0" onClick={handleClick}>
              0
            </button>
            {/* ... other buttons */}
            <button className="operator" name="=" onClick={calculate}>
              =
            </button>
            <button className="clear" onClick={clear}>
              C
            </button>
          </div>
          <div className="keypad2">
            <button className="add" onClick={() => handleOperatorClick("+")}>
              +
            </button>
            <button
              className="subtract"
              onClick={() => handleOperatorClick("-")}
            >
              -
            </button>
            <button
              className="multiply"
              onClick={() => handleOperatorClick("*")}
            >
              *
            </button>
            <button className="divide" onClick={() => handleOperatorClick("/")}>
              /
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
