import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../components/game-skeleton.js';

const startBrainCalcGame = () => {
  const questions = Array.from({ length: 3 }, () => {
    const max = 3;
    const min = 1;
    const type = randomIntFromInterval(min, max);

    const operand1 = randomIntFromInterval(0, 10);
    const operand2 = randomIntFromInterval(0, 10);
    switch (type) {
      case 1:

        return {
          question: `${operand1} + ${operand2}`,
          correctAnswer: String(operand1 + operand2),
        };

      case 2:

        return {
          question: `${operand1} - ${operand2}`,
          correctAnswer: String(operand1 - operand2),
        };

      case 3:

        return {
          question: `${operand1} * ${operand2}`,
          correctAnswer: String(operand1 * operand2),
        };

      default:
        return null;
    }
  });

  startGame(questions, 'What is the result of the expression?');
};

export default startBrainCalcGame;
