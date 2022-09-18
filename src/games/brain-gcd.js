import { getRandomNumber, make } from '../cli.js';
import game from '../index.js';

const message = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const gameGcd = () => {
  const lValue = getRandomNumber(100) + 1;
  const rValue = getRandomNumber(100) + 1;
  const question = `${lValue} ${rValue}`;
  const answer = getGcd(lValue, rValue);
  return make(question, answer);
};

const runGame = game(message);
const gcd = () => runGame(gameGcd);
export default gcd;
