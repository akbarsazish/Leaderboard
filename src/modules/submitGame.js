/* eslint-disable */
const handleSubmit = async (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const name = nameInput.value;
  const score = scoreInput.value;
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wUcdYlqfnVytiFkqhyG8/scores/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },

      body: JSON.stringify({ user: name, score: score }),

    }).then((data) => data.json());
    console.log(response);
    nameInput.value = ""
    scoreInput.value = ""
    
  } catch (error) {
    throw error;
  }
};

const form = document.getElementById('scoreForm');
form.addEventListener('submit', handleSubmit);
export default handleSubmit;
