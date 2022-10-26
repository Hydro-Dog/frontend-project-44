import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../index.js';
import QUESTIONS_QUANTITY from '../constants/questionsQuantity.js';

const getGcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return getGcd(m, k);
  }
  return n;
};

const startBrainGcdGame = () => {
  const questions = [];

  for (let i = 0; i < QUESTIONS_QUANTITY; i += 1) {
    const operand1 = randomIntFromInterval(0, 20);
    const operand2 = randomIntFromInterval(0, 20);

    questions.push({ question: `${operand1} ${operand2}`, correctAnswer: String(getGcd(operand1, operand2)) });
  }

  startGame(questions, 'Find the greatest common divisor of given numbers.');
};

export default startBrainGcdGame;
