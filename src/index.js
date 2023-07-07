import './style.css';
import { createGame } from './modules/createGame';
import { showScore } from './modules/showScore';

window.load = createGame()
window.load = showScore()