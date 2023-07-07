export const createGame = async () => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Ali Akbar Sazish' }),
    };
  
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('Failed to create a game.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };