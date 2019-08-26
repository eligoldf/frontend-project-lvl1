import readlineSync from 'readline-sync';

const pointsCount = 3;

const playGame = (gameInstruction, gameTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameInstruction);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (count) => {
    if (count >= pointsCount) {
      console.log(`Congratulation, ${userName}`);
      return count;
    }
    const { question, rightAnswer } = gameTask();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
      return iter(count + 1);
    }
    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return iter(count);
  };
  return iter(0);
};
export default playGame;
