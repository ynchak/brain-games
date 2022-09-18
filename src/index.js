import { greeting, getAnswerFromGamer, getQuestion, getAnswer } from './cli.js';

const game = (message) => (getData) => {
  const gamerName = greeting();
  console.log(message);
  let step = 0;
  while (step < 3) {
    const data = getData();
    const question = getQuestion(data);
    const correctAnswer = getAnswer(data);
    console.log(`Question: ${question}`);
    const gamerAnswer = getAnswerFromGamer();
    if (gamerAnswer !== correctAnswer) {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${gamerName}!`);
      return;
    }
    console.log('Correct!');
    step += 1;
  }
  console.log(`Congratulations, ${gamerName}!`);
};
export default game;
