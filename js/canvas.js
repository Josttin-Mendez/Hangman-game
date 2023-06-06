const screen = document.querySelector("canvas");
const ctx = screen.getContext("2d");
const btnNewGame = document.querySelector(".new-game"); // capturamos el boton nuevo juego
const btnLeaveGame = document.querySelector(".leave-game"); // capturamos el boton para salir del juego
const remainAttempts = document.getElementById("num-intentos"); // capturamos el numero de intentos restantes
const trueLetters = document.querySelector(".true-letters"); // capturamos el span donde se mostraran las letras correctas que el usuario presiona
const wrongLetters = document.querySelector(".wrong-letters"); // capturamos el span donde se mostraran las letras incorrectas que el usuario presiona
const textAlert = document.querySelector(".alert"); // capturamos el span donde se mostraran las alertas
const btnKeyboard = document.getElementById("btn-keyboard");
const inputKeyboard = document.getElementById("input-keyboard");
const alertContainer = document.querySelector(".alert-container");

//palabras predeterminadas
const getLocalStorage = () => {
  gameWords = JSON.parse(localStorage.getItem("gameWords"));
};

getLocalStorage();

//*!<-------------- seccion dibujar con canvas -------------->*/

/*<--------0* dibujamos el suelo ------->*/

const drawFloor = () => {
  ctx.fillStyle = "#4C3F33"; // ?color Marron oscuro
  ctx.fillRect(0, 256, 350, 9); //suelo
};
drawFloor();

/*<--------1* dibujamos el tronco de soporte vertical ------->*/
const drawThreeVertical = () => {
  ctx.fillStyle = "#4C3F33"; // ?color Marron oscuro
  ctx.fillRect(97.31, 30.45, 18.78, 230.18); //soporte vertical
  ctx.fillStyle = "#000000"; //? color negro
  ctx.fillRect(117.44, 30.45, 2.6, 230.44); //linea negra vertical-1
};

/*<--------2* dibujamos el tronco de soporte horizontal ------->*/

const drawThreeHorizontal = () => {
  ctx.fillStyle = "#4C3F33"; // ?color Marron oscuro
  ctx.fillRect(97.31, 11.53, 155.39, 15.6); //soporte horizontal
  ctx.fillStyle = "#000000"; //? color negro
  ctx.fillRect(97.31, 28.63, 155.39, 1.95); //linea negra horizontal-1
  ctx.fillRect(97.31, 8.1, 155.39, 1.95); //linea negra horizontal-2
};

/*<--------3* dibujamos la cuerda ------->*/
const drawThreeRope = () => {
  ctx.fillStyle = "#965E4D"; // ?color Marron claro
  ctx.fillRect(198.65, 30, 5.15, 26.92); //cuerda
  ctx.fillStyle = "#000000"; //? color negro
  ctx.fillRect(198.65, 33, 5.15, 2.89); //detalle negro -1
  ctx.fillRect(198.65, 38.67, 5.15, 2.89); //detalle negro -2
  ctx.fillRect(198.65, 44.38, 5.15, 2.89); //detalle negro -3
  ctx.fillRect(198.65, 50.15, 5.15, 2.89); //detalle negro -4
};

/*<--------4* dibujamos la cabeza con todos sus detalles ------->*/
const drawHead = () => {
  ctx.fillStyle = "#7C5011"; // ?color Marron piel
  ctx.fillRect(177.69, 57.08, 46.39, 46.45); //cabeza
  ctx.fillStyle = "#FFC364"; // ?color piel orejas y nariz
  ctx.fillRect(177.99, 57.08, 5.8, 5.8); //oreja izquierda
  ctx.fillRect(218.23, 57.08, 5.8, 5.8); //oreja derecha
  ctx.fillRect(189.21, 80.26, 23.56, 11.54); //nariz piel
  ctx.fillStyle = "#000000"; //? color negro
  ctx.fillRect(183.27, 68.52, 11.78, 11.78); //ojo izquierdo
  ctx.fillRect(206.62, 68.52, 11.78, 11.78); //ojo derecho
  ctx.fillRect(195.02, 80.28, 11.6, 5.8); //nariz negra
  ctx.fillStyle = "#4C3F33"; // ?color Marron oscuro
  ctx.fillRect(189.21, 91.8, 23.56, 11.54); //boca marron oscuro
  ctx.fillStyle = "#FFA1FD"; // ?color rosa lengua
  ctx.fillRect(195.02, 91.5, 11.57, 11.71); //lengua rosa=
};

/*<--------5* dibujamos el curpo, la camisa, y los brazos ------->*/
const drawBody = () => {
  ctx.fillStyle = "#FFCF26"; // ?color Amarillo camisa
  ctx.fillRect(154.44, 103.5, 92.79, 69.59); //camisa amarilla
  ctx.fillStyle = "#7C5011"; // ?color Marron piel
  ctx.fillRect(154.64, 144.12, 23.25, 29.06); //brazo izquierdo
  ctx.fillRect(223.68, 144.12, 23.25, 29.06); //brazo derecho
  ctx.fillStyle = "#000000"; //? color negro
  ctx.fillRect(176.27, 119.41, 1.3, 24.71); //borde negro camisa izquierdo
  ctx.fillRect(223.99, 119.41, 1.3, 24.71); //borde negro camisa derecho
};

/*<--------6* dibujamos el pantalon ------->*/

const drawPants = () => {
  ctx.fillStyle = "#282828"; // ?color gris oscuro pantalon
  ctx.fillRect(177.61, 173.02, 46.39, 40.72); //pantalon gris oscuro
};

/*<--------7* dibujamos los pies y los zapatos ------->*/

const drawLengths = () => {
  ctx.fillStyle = "#7C5011"; // ?color Marron piel
  ctx.fillRect(177.61, 213.72, 46.39, 11.52); //ambos pies
  ctx.fillStyle = "#000000"; //? color negro
  ctx.fillRect(177.61, 225.26, 46.39, 11.6); //zapatos negros
  ctx.fillStyle = "#BDBFC1"; //? color gris claro
  ctx.fillRect(183.39, 225.24, 11.6, 5.8); //cordon izquierdo
  ctx.fillRect(206.57, 225.24, 11.6, 5.8); //cordon derecho
  ctx.fillRect(177.61, 236.84, 46.39, 5.8); //suela gris
};

/*<--------8* dibujamos la cabeza girada con todos sus detalles ------->*/

const drawHeadRotate = () => {
  ctx.fillStyle = "#7C5011"; // ?color Marron piel
  ctx.fillRect(177.69, 57.08, 46.45, 46.39); //cabeza
  ctx.fillStyle = "#FFC364"; // ?color piel orejas y nariz
  ctx.fillRect(218.74, 57.06, 5.8, 5.8); //oreja izquierda
  ctx.fillRect(218.23, 96.74, 5.8, 5.8); //oreja derecha
  ctx.fillRect(189.28, 68.68, 11.54, 23.56); //nariz piel
  ctx.fillStyle = "#000000"; //? color negro
  ctx.fillRect(200.8, 65.42, 11.71, 3.3); //ojo izquierdo - linea Horiz
  ctx.fillRect(205.02, 61.19, 3.3, 11.71); //ojo izquierdo - linea Vert
  ctx.fillRect(200.8, 91.89, 11.71, 3.3); //ojo derecho - linea Horiz
  ctx.fillRect(205.02, 87.68, 3.3, 11.71); //ojo derecho - linea Vert
  ctx.fillRect(195.02, 74.53, 5.8, 11.6); //nariz negra
  ctx.fillStyle = "#4C3F33"; // ?color Marron oscuro
  ctx.fillRect(177.57, 68.68, 11.54, 23.56); //boca marron oscuro
  ctx.fillStyle = "#FFA1FD"; // ?color rosa lengua
  ctx.fillRect(177.57, 74.53, 11.71, 11.57); //lengua rosa
};

//*!<-------------- seccion logica del juego -------------->*/

//*<-------------- seccion validar Letras Correctas -------------->*/

// creamos la funcion para escoger una palabra aleatoria dentro del array de palabras predeterminadas
const sortedWord = gameWords[Math.floor(Math.random() * gameWords.length)];

const randomWord = () => {
  // console.log(sortedWord);
  return sortedWord;
};

//creamos los spans donde se mostraran las letras correctas que el usuario presiona
const createSpanCorrect = () => {
  let word = randomWord();
  for (let i = 1; i <= word.length; i++) {
    const spanLetter = document.createElement("span"); // metodo para crear span directamente desde Javascript
    trueLetters.appendChild(spanLetter);
  }
  return word;
};

//creamos los spans donde se mostraran las letras incorrectas que el usuario presiona
const createSpanIncorrect = () => {
  for (let j = 1; j < 9; j++) {
    const spanLetterInvalid = document.createElement("span"); // metodo para crear span directamente desde Javascript
    wrongLetters.appendChild(spanLetterInvalid);
  }
};

//creamos la funcion para mostrar las notificaciones de victoria o derrota
const notification = (text, img) => {
  const imgAlert = document.createElement("img");
  textAlert.textContent = "";
  alertContainer.classList.add("active");
  textAlert.classList.add("active");
  setTimeout(() => {
    textAlert.classList.remove("active");
  }, 2600);
  imgAlert.src = img;
  imgAlert.classList.add("icon-head");
  textAlert.textContent = text;
  textAlert.appendChild(imgAlert);
};

// creamos la funcion de volver al inicio cuando el usuario presione el boton de rendirse
const leaveGame = () => {
  setTimeout(() => {
    window.open("../Juego-del-Ahorcado/index.html", "_self");
  }, 1800);
  notification(
    `Te rendiste!...La palabra secreta era: ${sortedWord} `,
    "assets/icon-head-lose.svg"
  );
};
btnLeaveGame.addEventListener("click", leaveGame);

// creamos la funcion para restablecer el juego cuando el usuario presione el boton de nuevo juego
const restaureGame = () => {
  setTimeout(() => {
    window.open("../Juego-del-Ahorcado/game.html", "_self");
  }, 1800);
  notification("Juego Reiniciado!", "assets/icon-head-win.svg");
};
btnNewGame.addEventListener("click", restaureGame);

let letterIncorrect = createSpanIncorrect();
let letterCorrect = createSpanCorrect();
let counter = 8;
let counterWrongLetters = 0;
let letterValid = true;
let countWin = 0;
remainAttempts.textContent = counter;

// creamos la funcion para que el usuario presione una letra y se valide
document.addEventListener("keyup", (event) => {
  const correctSpans = document.querySelectorAll(".true-letters span");
  const wrongSpans = document.querySelectorAll(".wrong-letters span");

  for (const indexLetter in letterCorrect) {

    // validamos que el usuario presione una letra y no un numero o caracter especial y de ser asi, el sistema no reconozca dichas teclas
    if (/[^a-z ]/.test(event.key)) {
      return;
    }

    // validamos que las teclas presionadas coincidan con las letras de la palabra aleatoria
    if (event.key.toUpperCase() === letterCorrect[indexLetter]) {
      correctSpans[indexLetter].textContent = letterCorrect[indexLetter];
      letterCorrect = letterCorrect.replace(letterCorrect[indexLetter], "1");
      countWin++;
      letterValid = true;
      break;
    }
    letterValid = false;
  }

  //validamos que las letras presionadas no sean correctas y las mostramos en el span de letras incorrectas
  while (counterWrongLetters <= 7) {
    if (!letterValid) {
      wrongSpans[counterWrongLetters].textContent = event.key.toUpperCase();
      counterWrongLetters++;
      remainAttempts.textContent = counterWrongLetters;
      break;
    }
    break;
  }

  //*todo<---------- validamos si el usuario gano o perdio y se lo notificamos ---------->*/

  if (!letterValid)
    if (counter > 0) {
      counter--;
    }

  validateDrawCanvas(); // validamos si el usuario se equivoco y dibujamos el canvas
  remainAttempts.textContent = "";
  remainAttempts.textContent = counter;

  ///colocar en el link  /Juego-del-Ahorcado
  if (counter === 0) {
    setTimeout(() => {
      window.open("../Juego-del-Ahorcado/game.html", "_self");
    }, 1800);
    notification(
      `Perdiste! la palabra secreta era:  ${sortedWord}`,
      "assets/icon-head-lose.svg"
    );
  }

  if (countWin === correctSpans.length) {
    setTimeout(() => {
      window.open("../Juego-del-Ahorcado/game.html", "_self");
    }, 1800);
    notification("Ganaste! Bien hecho!", "assets/icon-head-win.svg");
  }
});

//*todo<-------------- seccion validar Letras incorrectas -------------->*/

// validamos si el usuario va agotando sus intentos y dibujamos el canvas
const validateDrawCanvas = () => {
  if (counter === 7) {
    drawThreeVertical();
  } else if (counter === 6) {
    drawThreeHorizontal();
  } else if (counter === 5) {
    drawThreeRope();
  } else if (counter === 4) {
    drawHead();
  } else if (counter === 3) {
    drawBody();
  } else if (counter === 2) {
    drawPants();
  } else if (counter === 1) {
    drawLengths();
  } else if (counter === 0) {
    drawHeadRotate();
  }
};
