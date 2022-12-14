import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../index.js';
import QUESTIONS_QUANTITY from '../constants/questionsQuantity.js';

const isPrime = (value) => {
  for (let i = 2, s = Math.sqrt(value); i <= s; i += 1) { if (value % i === 0) return false; }
  return value > 1;
};

const startBrainIsPrimeGame = () => {
  const questions = [];
  for (let i = 0; i < QUESTIONS_QUANTITY; i += 1) {
    const operand = randomIntFromInterval(0, 100);
    questions.push({ question: `${operand}`, correctAnswer: `${isPrime(operand) ? 'yes' : 'no'}` });
  }

  startGame(questions, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default startBrainIsPrimeGame;
