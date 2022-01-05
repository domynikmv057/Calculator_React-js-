import "./ScreenCalculator.css";

function ScreenCalculator({ screenValue, result, operationHistory }) {
  return (
    <>
      <div className="css-screen">
        <span className="css-screen-test">{operationHistory}</span>
        <span className="css-screen-operation">{screenValue}</span>
        <span className="css-screen-result">{result}</span>
      </div>
    </>
  );
}

export default ScreenCalculator;
