import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../index.js';
import QUESTIONS_QUANTITY from '../constants/questionsQuantity.js';

const getProgression = (startValue, increment) => Array.from({ length: 10 }, (_, i) => (startValue
  + increment * i));

const startBrainProgressionGame = () => {
  const questions = [];
  for (let i = 0; i < QUESTIONS_QUANTITY; i += 1) {
    const startValue = randomIntFromInterval(0, 10);
    const increment = randomIntFromInterval(0, 10);

    const progression = getProgression(startValue, increment);
    const indexToRemove = randomIntFromInterval(0, 10);
    const correctAnswer = progression.splice(indexToRemove, 1, '..');
    questions.push({ question: `${progression.join(' ')}`, correctAnswer: String(correctAnswer) });
  }

  startGame(questions, 'What number is missing in the progression?');
};

export default startBrainProgressionGame;
