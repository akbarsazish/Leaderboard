import './style.css';
import { createGame } from './modules/createGame';
import { showScore } from './modules/showScore';

window.load = createGame()
window.load = showScore()

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', () => {
  location.reload();
});