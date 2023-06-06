//*!<-------------- seccion agregar palabras -------------->*/

const fieldText = document.querySelector(".text-content"); // capturamos el text area
const btnSaveWord = document.querySelector(".save-word"); // capturamos el boton de guardar y empezar el juego
const textAlert = document.querySelector(".alert"); // capturamos el span donde se mostraran las alertas
const alertContainer = document.querySelector(".alert-container");


const getLocalStorage = () => {
  gameWords = JSON.parse(localStorage.getItem("gameWords"));
}

getLocalStorage();


//agregamos las palabras del usuario al array de palabras predeterminadas
function addWords() {
  let word = fieldText.value.toUpperCase().trim();
  let WordValid = validateWord(word)
  if (WordValid) {
    gameWords.push(word);
    saveLocalStorage();
    fieldText.value = "";
    console.log({ gameWords, word });
  }
}


btnSaveWord.onclick = () => {
  addWords();
};



  //creamos la funcion para mostrar las notificaciones de victoria o derrota
  const notification = (text, img) => {
    const imgAlert = document.createElement("img");
    textAlert.textContent = "";
    alertContainer.classList.add("active");
    textAlert.classList.add("active");
    setTimeout(() => {textAlert.classList.remove("active"); alertContainer.classList.remove("active")}, 2600);
    imgAlert.src = img;
    imgAlert.classList.add("icon-head");
    textAlert.textContent = text;
    textAlert.appendChild(imgAlert);
   
  };

  fieldText.focus();


  
  //validamos que la palabra tenga mas de 3 letras y menos de 8
  fieldText.focus();

  function validateWord(word) {
    if (word.length === 0) {
      setTimeout(() => {}, 1800);
      notification("No has ingresado ninguna palabra!", 'assets/icon-head-lose.svg');
      fieldText.focus();
      return false;
    }
    
    if (/^[a-zA-Z ]*$/.test(word) === false) {
      setTimeout(() => {}, 1800);
      notification("No se permiten numeros ni caracteres especiales!", 'assets/icon-head-lose.svg');
      fieldText.value = "";
      fieldText.focus();
      return false;
      
    }
    
    if (gameWords.includes(word)) {
      setTimeout(() => {}, 1800);
      notification("La palabra ya se encuentra agregada!", 'assets/icon-head-lose.svg');
      fieldText.value = "";
      fieldText.focus();
      return false;
    }

    if (word.length >= 3 && word.length <= 8) {
      setTimeout(() => {window.open("../Juego-del-Ahorcado/game.html", "_self")}, 2800);
      notification("Palabra agregada con Exito!", 'assets/icon-head-win.svg');
      return true;    
    } 
    
    if(word.length < 3) {
      setTimeout(() => {}, 1800);
      notification("Cantidad de Letras Invalidas!", 'assets/icon-head-lose.svg');
      fieldText.value = "";
      fieldText.focus();
      return false;
    }
  }

  fieldText.focus();
  


  
