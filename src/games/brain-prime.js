import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../components/game-skeleton.js';

const isPrime = (value) => {
  for (let i = 2, s = Math.sqrt(value); i <= s; i += 1) { if (value % i === 0) return false; }
  return value > 1;
};

const startBrainIsPrimeGame = () => {
  const questions = Array.from({ length: 3 }, () => {
    const operand = randomIntFromInterval(0, 100);
    return { question: `${operand}`, correctAnswer: `${isPrime(operand) ? 'yes' : 'no'}` };
  });

  startGame(questions, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default startBrainIsPrimeGame;
