import "./Buttons.css";
import MapKeyboard from "../MapKeyboard/MapKeyboard";

function Buttons({
  addValueScreen,
  cleaCalculator,
  backspace,
  choseOperation,
  calc,
  squareRoot,
  changeSign,
}) {
  document.addEventListener("keydown", MapKeyboard);

  return (
    <div>
      <button
        className="css-operr-style css-button-operation red"
        id="teclaC"
        onClick={() => cleaCalculator()}
      >
        C
      </button>

      <button
        className="css-operr-style backspace css-button-operation"
        id="tecla<="
        onClick={() => backspace()}
      >
        ⌫
      </button>

      <button
        className="css-operr-style css-button-operation"
        value="√"
        onClick={() => squareRoot()}
      >
        √
      </button>

      <button
        className="css-operr-style multiply css-button-operation"
        value="/"
        id="tecla/"
        onClick={(event) => choseOperation(event)}
      >
        ÷
      </button>

      <button
        className="css-button-operation"
        value={7}
        id="tecla7"
        onClick={(event) => addValueScreen(event)}
      >
        7
      </button>

      <button
        className="css-button-operation"
        value={8}
        id="tecla8"
        onClick={(event) => addValueScreen(event)}
      >
        8
      </button>

      <button
        className="css-button-operation"
        value={9}
        id="tecla9"
        onClick={(event) => addValueScreen(event)}
      >
        9
      </button>

      <button
        className="css-operr-style css-button-operation"
        value="*"
        id="tecla*"
        onClick={(event) => choseOperation(event)}
      >
        x
      </button>

      <button
        className="css-button-operation"
        value={4}
        id="tecla4"
        onClick={(event) => addValueScreen(event)}
      >
        4
      </button>

      <button
        className="css-button-operation"
        value={5}
        id="tecla5"
        onClick={(event) => addValueScreen(event)}
      >
        5
      </button>

      <button
        className="css-button-operation"
        id="tecla6"
        value={6}
        onClick={(event) => addValueScreen(event)}
      >
        6
      </button>

      <button
        className="css-operr-style css-button-operation"
        value="-"
        id="tecla-"
        onClick={(event) => choseOperation(event)}
      >
        -
      </button>

      <button
        className="css-button-operation"
        id="tecla1"
        value={1}
        onClick={(event) => addValueScreen(event)}
      >
        1
      </button>

      <button
        className="css-button-operation"
        id="tecla2"
        value={2}
        onClick={(event) => addValueScreen(event)}
      >
        2
      </button>

      <button
        className="css-button-operation"
        id="tecla3"
        value={3}
        onClick={(event) => addValueScreen(event)}
      >
        3
      </button>

      <button
        className="css-operr-style css-button-operation"
        value="+"
        id="tecla+"
        onClick={(event) => choseOperation(event)}
      >
        +
      </button>

      <button className="css-button-operation" onClick={() => changeSign()}>
        +/-
      </button>

      <button
        className="css-button-operation"
        id="tecla0"
        value={0}
        onClick={(event) => addValueScreen(event)}
      >
        0
      </button>

      <button
        className="css-button-operation"
        value="."
        id="tecla,"
        onClick={(event) => addValueScreen(event)}
      >
        .
      </button>

      <button
        className="css-button-calc css-button-operation"
        id="tecla="
        onClick={() => calc()}
      >
        =
      </button>
    </div>
  );
}
export default Buttons;
