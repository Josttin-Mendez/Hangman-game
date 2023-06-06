//palabras predeterminadas
const gameWords = [
    'ALURA',
    'PYTHON',
    'JAVA',
    'CAFE',
    'GATOS',
    'PROGRAMAR',
    'ELEFANTE',
    'HTML',
    'BACKEND',
    'FRONTEND',
    'DEVELOPER',
    'MADRE'
  ]; 
  
  //guardamos el array en localStorage
  
  const saveLocalStorage = () => {
    localStorage.setItem("gameWords", JSON.stringify(gameWords));
  }
  saveLocalStorage();