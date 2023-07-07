const showScore = () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wUcdYlqfnVytiFkqhyG8/scores/';

  fetch(url, {
    method: 'GET',
  })
    .then((data) => data.json())
    .then((response) => {
      const scoreList = document.getElementById('scoreList');
      scoreList.innerHTML = '';
      response.result.forEach((score) => {
        const li = document.createElement('li');
        li.textContent = `User: ${score.user}, Score: ${score.score}`;
        scoreList.appendChild(li);
      });
    })
    .catch((error) => {
      throw error;
    });
};
export default showScore;
