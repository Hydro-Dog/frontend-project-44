import readlineSync from 'readline-sync';

const correctAnswersLimit = 3;
let currentNumber = null;
let userName = null;

const generateQuestion = () => {
  currentNumber = Math.ceil(Math.random() * 100);
  console.log(`Question: ${currentNumber}`);
};

const requestAnswer = () => readlineSync.question('Your answer:');

const checkIsAnswerCorrect = (value) => {
  const correctAnswer = currentNumber % 2 ? 'no' : 'yes';

  return correctAnswer === value;
};

const askUserName = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  return name;
};

const startBrainEvenGame = () => {
  userName = askUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < correctAnswersLimit; i += 1) {
    generateQuestion();
    const answer = requestAnswer();
    if (checkIsAnswerCorrect(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${currentNumber % 2 ? 'no' : 'yes'}.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startBrainEvenGame;
