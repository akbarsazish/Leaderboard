import './style.css';
import createGame from './modules/createGame.js';
import showScore from './modules/showScore.js';
import handleSubmit from './modules/submitGame';
/* eslint-disable */
window.load = createGame();
handleSubmit();
window.load = showScore();

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
  location.reload()
});
