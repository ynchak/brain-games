import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getAnswerFromGamer = () => readlineSync.question('Your answer: ');

export const make = (question, answer) => cons(String(question), String(answer));
export const getQuestion = (pair) => car(pair);
export const getAnswer = (pair) => cdr(pair);
