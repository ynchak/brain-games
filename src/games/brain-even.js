import { getRandomNumber } from '../cli.js';
import game from '../index.js';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameEven = () => {
  const question = getRandomNumber(100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const runGame = game(message);
const even = () => runGame(gameEven);
export default even;
