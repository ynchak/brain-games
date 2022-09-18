import { getRandomNumber, make } from '../cli.js';
import game from '../index.js';

const message = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calulate = (a, op, b) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
    default:
      return a * b;
  }
};

const gameCalc = () => {
  const operation = operations[getRandomNumber(3)];
  const lValue = getRandomNumber(100);
  const rValue = getRandomNumber(100);
  const question = `${lValue} ${operation} ${rValue}`;
  const answer = calulate(lValue, operation, rValue);
  return make(question, answer);
};
const runGame = game(message);
const calc = () => runGame(gameCalc);
export default calc;
