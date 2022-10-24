import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../components/game-skeleton.js';

const getGcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return getGcd(m, k);
  }
  return n;
};

const startBrainGcdGame = () => {
  const questions = Array.from({ length: 3 }, () => {
    const operand1 = randomIntFromInterval(0, 100);
    const operand2 = randomIntFromInterval(0, 100);
    return { question: `${operand1} ${operand2}`, correctAnswer: `${getGcd(operand1, operand2)}` };
  });

  startGame(questions, 'Find the greatest common divisor of given numbers.');
};

export default startBrainGcdGame;
