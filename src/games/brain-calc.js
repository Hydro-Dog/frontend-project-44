import randomIntFromInterval from '../utils/randomIntFromInterval.js';
import startGame from '../index.js';
import QUESTIONS_QUANTITY from '../constants/questionsQuantity.js';

const getQuestionValues = () => [randomIntFromInterval(0, 10), randomIntFromInterval(0, 10)];

const getExpression = (operand1, operand2, type) => {
  switch (type) {
    case 1:

      return `${operand1} + ${operand2}`;

    case 2:

      return `${operand1} - ${operand2}`;

    case 3:

      return `${operand1} * ${operand2}`;

    default:
      return null;
  }
};

const getExpressionResult = (operand1, operand2, type) => {
  switch (type) {
    case 1:

      return operand1 + operand2;

    case 2:

      return operand1 - operand2;

    case 3:

      return operand1 * operand2;

    default:
      return null;
  }
};

const startBrainCalcGame = () => {
  const questions = [];
  const max = 3;
  const min = 1;

  for (let i = 0; i < QUESTIONS_QUANTITY; i += 1) {
    const type = randomIntFromInterval(min, max);

    const [operand1, operand2] = getQuestionValues();
    questions.push({
      question: getExpression(operand1, operand2, type),
      correctAnswer: String(getExpressionResult(operand1, operand2, type)),
    });
  }

  startGame(questions, 'What is the result of the expression?');
};

export default startBrainCalcGame;
