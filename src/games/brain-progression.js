import { getRandomNumber, make } from '../cli.js';
import game from '../index.js';

const message = 'What number is missing in the progression?';

const makeProgression = () => {
  const numbers = [];
  const l = getRandomNumber(10) + 5;
  const addValue = getRandomNumber(20) + 1;
  const startValue = getRandomNumber(100);
  numbers.push(startValue);
  for (let i = 1; i < l; i += 1) {
    const current = numbers[i - 1] + addValue;
    numbers.push(current);
  }
  return numbers;
};

const gameProgression = () => {
  const progression = makeProgression();
  const indexHiden = getRandomNumber(progression.length - 1);
  const answer = progression[indexHiden];
  progression[indexHiden] = '..';
  const question = progression.join(' ');
  return make(question, answer);
};

const runGame = game(message);
const progression = () => runGame(gameProgression);
export default progression;
