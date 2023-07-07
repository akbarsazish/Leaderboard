import './style.css';
import createGame from './modules/createGame.js';
import showScore from './modules/showScore.js';
/* eslint-disable */
window.load = createGame();
window.load = showScore();

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
  location.reload()
});
