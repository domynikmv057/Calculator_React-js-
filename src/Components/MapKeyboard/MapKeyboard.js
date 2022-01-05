const keymap = {
  0: "tecla0",
  1: "tecla1",
  2: "tecla2",
  3: "tecla3",
  4: "tecla4",
  5: "tecla5",
  6: "tecla6",
  7: "tecla7",
  8: "tecla8",
  9: "tecla9",
  "/": "tecla/",
  "*": "tecla*",
  "-": "tecla-",
  "+": "tecla+",
  "=": "tecla=",
  Enter: "tecla=",
  Backspace: "tecla<=",
  c: "teclaC",
  ",": "tecla,",
};

const MapKeyboard = (event) => {
  const keyboard = event.key;
  const allowedKey = () => Object.keys(keymap).indexOf(keyboard) !== -1;
  if (allowedKey()) document.getElementById(keymap[keyboard]).click();
};
export default MapKeyboard;
