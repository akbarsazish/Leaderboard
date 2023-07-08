import './style.css';
import createGame from './modules/createGame.js';
import showScore from './modules/showScore.js';
import handleSubmit from './modules/submitGame.js';
/* eslint-disable */
window.load = createGame();
handleSubmit();
window.load = showScore();

const refreshButton = document.getElementById('refresh-button');
const scoreList = document.getElementById('scoreList');

refreshButton.addEventListener('click', async () => {
  try {
    const gameId = 'wUcdYlqfnVytiFkqhyG8';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

    const response = await fetch(url);
    const data = await response.json();
    scoreList.innerHTML = '';
    data.result.forEach((score) => {
      const li = document.createElement('li');
      li.textContent = `User: ${score.user}, Score: ${score.score}`;
      scoreList.appendChild(li);
      location.reload()
    });
  } catch (error) {
    console.error(error);
  }
});
