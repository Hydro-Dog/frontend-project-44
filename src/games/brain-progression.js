import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../index.js';

const startBrainProgressionGame = () => {
  const questions = Array.from({ length: 3 }, () => {
    const startValue = randomIntFromInterval(0, 10);
    const increment = randomIntFromInterval(0, 10);

    const progression = Array.from({ length: 10 }, (_, i) => (startValue + increment * i));
    const indexToRemove = randomIntFromInterval(0, 10);
    const correctAnswer = progression.splice(indexToRemove, 1, '..');

    return { question: `${progression.join(' ')}`, correctAnswer: String(correctAnswer) };
  });

  startGame(questions, 'What number is missing in the progression?');
};

export default startBrainProgressionGame;
