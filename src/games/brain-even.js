import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../index.js';

const startBrainEvenGame = () => {
  const questions = Array.from({ length: 3 }, () => {
    const question = randomIntFromInterval(0, 100);
    return { question, correctAnswer: `${question % 2 ? 'no' : 'yes'}` };
  });

  startGame(questions, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default startBrainEvenGame;
