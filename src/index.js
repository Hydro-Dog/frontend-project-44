import readlineSync from 'readline-sync';
import askUserName from './utils/askUserName.js';
import displayWrongAnswerMessage from './utils/displayWrongAnswerMessage.js';

const requestAnswer = () => readlineSync.question('Your answer:');
const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const startGame = (questions, taskText) => {
  const correctAnswersLimit = 3;
  const userName = askUserName();
  console.log(taskText);

  for (let i = 0; i < correctAnswersLimit; i += 1) {
    const { question, correctAnswer } = questions[i];
    showQuestion(question);
    const userAnswer = requestAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      displayWrongAnswerMessage(userAnswer, correctAnswer, userName);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
