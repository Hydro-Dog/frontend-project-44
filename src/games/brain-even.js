import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../index.js';
import QUESTIONS_QUANTITY from '../constants/questionsQuantity.js';

const isEven = (operand) => !(operand % 2);

const startBrainEvenGame = () => {
  const questions = [];

  for (let i = 0; i < QUESTIONS_QUANTITY; i += 1) {
    const question = randomIntFromInterval(0, 100);
    questions.push({
      question,
      correctAnswer: `${isEven(question) ? 'yes' : 'no'}`,
    });
  }

  startGame(questions, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default startBrainEvenGame;
