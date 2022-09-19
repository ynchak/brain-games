import { getRandomNumber, make } from '../cli.js';
import game from '../index.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const gamePrime = () => {
  const question = getRandomNumber(100) + 1;
  const answer = isPrime(question) ? 'yes' : 'no';
  return make(question, answer);
};

const runGame = game(message);
const prime = () => runGame(gamePrime);
export default prime;
