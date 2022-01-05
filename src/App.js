import React, { useState } from "react";
import Buttons from "./Components/Buttons/Buttons";
import ScreenCalculator from "./Components/ScreenCalculator/ScreenCalculator";
import "./styles.css";
import NavEmix from "./Components/NavEmix/NavEmix";

function App() {
  const [screenValue, setScreenValue] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState();
  const [glueValue, setGlueValue] = useState();
  const [primaryNumber, setPrimaryNumber] = useState(0);
  const [operationHistory, setOperationHistory] = useState(0);
  const [acumulator, setAcumulator] = useState(0);

  function cleaCalculator() {
    setScreenValue(0);
    setResult(0);
    setOperator(0);
    setGlueValue(0);
    setPrimaryNumber(0);
    setOperationHistory(0);
  }

  function addValueScreen(e) {
    if (screenValue === 0) {
      setScreenValue(e.target.value);
      setGlueValue(e.target.value);
    } else {
      setScreenValue(screenValue + e.target.value);
      setGlueValue(glueValue + e.target.value);
    }
  }

  function backspace() {
    let vScreen1 = screenValue;
    vScreen1 = vScreen1.substring(0, vScreen1.length - 1);
    setScreenValue(vScreen1);
    let vScreen2 = glueValue;
    vScreen2 = vScreen2.substring(0, vScreen2.length - 1);
    setGlueValue(vScreen2);
    return;
  }

  function choseOperation(e) {
    const operr = e.target.value;
    setPrimaryNumber(glueValue);
    setOperator(operr);
    setGlueValue("");

    if (acumulator > 0) {
      setPrimaryNumber(primaryNumber + operationHistory);
      calc();
    }

    if (operationHistory === 0) {
      setOperationHistory(screenValue + operr);
      setScreenValue(0);
      setAcumulator(acumulator + 1);
    } else {
      if (screenValue > 0) {
        setOperationHistory(operationHistory + screenValue + operr);
        setScreenValue(0);
        setAcumulator(acumulator + 1);
      } else {
        setOperationHistory(operationHistory + operr);
        setScreenValue(0);
        setAcumulator(acumulator + 1);
      }
    }
  }

  function calc() {
    setOperationHistory(operationHistory + screenValue);
    setScreenValue(0);
    if (operator === "+") {
      if (result === parseFloat(primaryNumber) + parseFloat(glueValue)) {
        setPrimaryNumber(result);
        setResult(parseFloat(result) + parseFloat(glueValue));
        setOperationHistory(result + operator + glueValue);
        setAcumulator(0);

        return;
      } else {
        if (result > 0) {
          setResult(parseFloat(result) + parseFloat(glueValue));
          setOperationHistory(operationHistory + operator);
          setAcumulator(0);

          return;
        } else {
          setResult(parseFloat(primaryNumber) + parseFloat(glueValue));
          setAcumulator(0);

          return;
        }
      }
    }
    if (operator === "-") {
      if (result === parseFloat(primaryNumber) - parseFloat(glueValue)) {
        setPrimaryNumber(result);
        setResult(parseFloat(result) - parseFloat(glueValue));
        setOperationHistory(result + operator + glueValue);
        setAcumulator(0);

        return;
      } else {
        if (result > 0) {
          setResult(parseFloat(result) - parseFloat(glueValue));
          setAcumulator(0);

          return;
        } else {
          setResult(parseFloat(primaryNumber) - parseFloat(glueValue));
          setAcumulator(0);

          return;
        }
      }
    }
    if (operator === "*") {
      if (result === parseFloat(primaryNumber) * parseFloat(glueValue)) {
        setPrimaryNumber(result);
        setResult(parseFloat(result) * parseFloat(glueValue));
        setOperationHistory(result + operator + glueValue);
        setAcumulator(0);

        return;
      } else {
        if (result > 0) {
          setResult(parseFloat(result) * parseFloat(glueValue));
          setAcumulator(0);

          return;
        } else {
          setResult(parseFloat(primaryNumber) * parseFloat(glueValue));
          setAcumulator(0);

          return;
        }
      }
    }
    if (operator === "/") {
      if (result === parseFloat(primaryNumber) / parseFloat(glueValue)) {
        setPrimaryNumber(result);
        setResult(parseFloat(result) / parseFloat(glueValue));
        setOperationHistory(result + operator + glueValue);
        setAcumulator(0);

        return;
      } else {
        if (result > 0) {
          setResult(parseFloat(result) / parseFloat(glueValue));
          setAcumulator(0);

          return;
        } else {
          setResult(parseFloat(primaryNumber) / parseFloat(glueValue));
          setAcumulator(0);

          return;
        }
      }
    }
    setAcumulator(0);
  }

  function squareRoot() {
    if (result > 0) {
      setResult(Math.sqrt(result).toFixed(5));
    } else {
      setResult(Math.sqrt(glueValue).toFixed(5));
    }
  }

  function changeSign() {
    if (result > 0) {
      if (screenValue > 0) {
        setScreenValue(-screenValue);
        setGlueValue(-glueValue);
      } else {
        setScreenValue(Math.abs(screenValue));
        setGlueValue(Math.abs(glueValue));
      }
    } else {
      if (screenValue > 0) {
        setScreenValue(-screenValue);
        setGlueValue(-glueValue);
      } else {
        setScreenValue(Math.abs(screenValue));
        setGlueValue(Math.abs(glueValue));
      }
    }
  }

  return (
    <main className="css-container-main">
      <NavEmix />
      <div className="css-button-style">
        <ScreenCalculator
          screenValue={screenValue}
          result={result}
          operationHistory={operationHistory}
        />
        <Buttons
          addValueScreen={addValueScreen}
          cleaCalculator={cleaCalculator}
          backspace={backspace}
          choseOperation={choseOperation}
          calc={calc}
          squareRoot={squareRoot}
          changeSign={changeSign}
        />
      </div>
    </main>
  );
}

export default App;
