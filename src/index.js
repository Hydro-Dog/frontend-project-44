import readlineSync from 'readline-sync';
import askUserName from './utils/askUserName.js';
import displayWrongAnswerMessage from './utils/displayWrongAnswerMessage.js';

const startGame = (questions, taskText) => {
  const correctAnswersLimit = 3;
  const userName = askUserName();
  console.log(taskText);

  for (let i = 0; i < correctAnswersLimit; i += 1) {
    const { question, correctAnswer } = questions[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');

    if (userAnswer !== correctAnswer) {
      displayWrongAnswerMessage(userAnswer, correctAnswer, userName);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
