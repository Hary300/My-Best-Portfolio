export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: number;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  code: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: 'JavaScript Fundamentals',
    difficulty: 'Medium',
    question: 'What is the output of the following code?',
    code: `const nums = [1, 2, 3];
const result = nums.reduce((a, b) => a + b, 0) + 5;
console.log(result);`,
    options: [
      { id: 'a', text: '11' },
      { id: 'b', text: '6' },
      { id: 'c', text: '5' },
      { id: 'd', text: 'undefined' },
    ],
    correctAnswer: 'a',
    explanation:
      'nums.reduce() sums all array elements (1 + 2 + 3 = 6) starting from an initial value of 0, then adds 5 outside the reduce method, resulting in 11.',
  },
  {
    id: 2,
    category: 'JavaScript Scope & Closure',
    difficulty: 'Easy',
    question: 'What value will be logged to the console?',
    code: `let x = 10;
  function update() {
    let x = 20;
  }
  update();
  console.log(x);`,
    options: [
      { id: 'a', text: '20' },
      { id: 'b', text: '10' },
      { id: 'c', text: 'ReferenceError' },
      { id: 'd', text: 'undefined' },
    ],
    correctAnswer: 'b',
    explanation:
      'The variable `x` inside the `update` function is declared using `let`, making it block-scoped and preventing it from modifying the outer `x` variable.',
  },
  {
    id: 3,
    category: 'JavaScript Fundamentals',
    difficulty: 'Easy',
    question: 'What is the output of the typeof operator below?',
    code: `console.log(typeof NaN);`,
    options: [
      { id: 'a', text: '"number"' },
      { id: 'b', text: '"NaN"' },
      { id: 'c', text: '"undefined"' },
      { id: 'd', text: '"object"' },
    ],
    correctAnswer: 'a',
    explanation:
      'In JavaScript, NaN (Not-a-Number) is technically considered a numeric value, so typeof NaN returns "number".',
  },
  {
    id: 4,
    category: 'JavaScript Objects',
    difficulty: 'Medium',
    question: 'What gets printed to the console?',
    code: `const person = { name: 'Alice' };
const members = [person];
person.name = 'Bob';
console.log(members[0].name);`,
    options: [
      { id: 'a', text: 'Alice' },
      { id: 'b', text: 'Bob' },
      { id: 'c', text: 'undefined' },
      { id: 'd', text: 'TypeError' },
    ],
    correctAnswer: 'b',
    explanation:
      'Objects in JavaScript are passed by reference. Updating person.name also updates the object inside the members array.',
  },
  {
    id: 5,
    category: 'Async JavaScript',
    difficulty: 'Medium',
    question: 'What will be logged first to the console?',
    code: `console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');`,
    options: [
      { id: 'a', text: 'Start, Timeout, Promise, End' },
      { id: 'b', text: 'Start, End, Timeout, Promise' },
      { id: 'c', text: 'Start, End, Promise, Timeout' },
      { id: 'd', text: 'Start, Promise, Timeout, End' },
    ],
    correctAnswer: 'c',
    explanation:
      'Synchronous code runs first (Start, End). Promise microtasks run before setTimeout macrotasks, even with a 0ms delay.',
  },
  {
    id: 6,
    category: 'Array Methods',
    difficulty: 'Easy',
    question: 'What is the result of this map operation?',
    code: `const nums = [1, 2, 3];
const result = nums.map(x => x * 2).filter(x => x > 2);
console.log(result);`,
    options: [
      { id: 'a', text: '[2, 4, 6]' },
      { id: 'b', text: '[4, 6]' },
      { id: 'c', text: '[2]' },
      { id: 'd', text: '[3]' },
    ],
    correctAnswer: 'b',
    explanation:
      'map doubles the elements into [2, 4, 6], and filter keeps only elements greater than 2, resulting in [4, 6].',
  },
  {
    id: 7,
    category: 'JavaScript Coercion',
    difficulty: 'Easy',
    question: 'What is the output of adding an array and a string?',
    code: `console.log([] + 'hello');`,
    options: [
      { id: 'a', text: '"[object Object]hello"' },
      { id: 'b', text: '"hello"' },
      { id: 'c', text: 'TypeError' },
      { id: 'd', text: 'undefined' },
    ],
    correctAnswer: 'b',
    explanation:
      'The empty array [] coerces into an empty string "", so "" + "hello" evaluates to "hello".',
  },
  {
    id: 8,
    category: 'JavaScript Scope & Closure',
    difficulty: 'Hard',
    question: 'What value will be logged?',
    code: `function createCounter() {
  let count = 0;
  return () => ++count;
}
const counter = createCounter();
counter();
console.log(counter());`,
    options: [
      { id: 'a', text: '0' },
      { id: 'b', text: '1' },
      { id: 'c', text: '2' },
      { id: 'd', text: 'undefined' },
    ],
    correctAnswer: 'c',
    explanation:
      'The closure retains access to count. The first call increments count to 1, and the second call increments it to 2.',
  },
  {
    id: 9,
    category: 'JavaScript Fundamentals',
    difficulty: 'Medium',
    question: 'What does destructured assignment output here?',
    code: `const [a, , b] = [10, 20, 30, 40];
console.log(a + b);`,
    options: [
      { id: 'a', text: '30' },
      { id: 'b', text: '40' },
      { id: 'c', text: '50' },
      { id: 'd', text: 'NaN' },
    ],
    correctAnswer: 'b',
    explanation:
      'The comma skips the second item (20). Variable a gets 10 and b gets 30, making 10 + 30 = 40.',
  },
  {
    id: 10,
    category: 'JavaScript Objects',
    difficulty: 'Medium',
    question: 'What will be output by Object.assign?',
    code: `const target = { a: 1 };
const source = { b: 2, a: 3 };
const result = Object.assign(target, source);
console.log(result.a);`,
    options: [
      { id: 'a', text: '1' },
      { id: 'b', text: '2' },
      { id: 'c', text: '3' },
      { id: 'd', text: 'undefined' },
    ],
    correctAnswer: 'c',
    explanation:
      'Object.assign overwrites existing properties in target with matching properties from source, setting a to 3.',
  },
  {
    id: 11,
    category: 'Array Methods',
    difficulty: 'Hard',
    question: 'What is the output of Array.prototype.includes?',
    code: `const arr = [NaN];
console.log(arr.includes(NaN));`,
    options: [
      { id: 'a', text: 'false' },
      { id: 'b', text: 'true' },
      { id: 'c', text: 'TypeError' },
      { id: 'd', text: 'undefined' },
    ],
    correctAnswer: 'b',
    explanation:
      'Unlike indexOf (which uses Strict Equality ===), Array.prototype.includes uses SameValueZero comparison and can detect NaN.',
  },
  {
    id: 12,
    category: 'Async JavaScript',
    difficulty: 'Hard',
    question: 'What gets logged when handling an unhandled Promise error?',
    code: `async function test() {
  throw new Error('Failed');
}
test().catch(err => console.log(err.message));`,
    options: [
      { id: 'a', text: 'Failed' },
      { id: 'b', text: 'Uncaught Error' },
      { id: 'c', text: 'undefined' },
      { id: 'd', text: 'Nothing' },
    ],
    correctAnswer: 'a',
    explanation:
      'An async function returning a rejected Promise is caught by .catch(), which accesses err.message ("Failed").',
  },
];
