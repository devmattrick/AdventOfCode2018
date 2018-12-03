import { loadFileString } from '../../util/file';

const input = loadFileString(__dirname, '..', 'input.txt').split('\n');

let frequency = 0;

input.forEach((delta) => {
  frequency += Number(delta);
});

console.log(`Result: ${frequency}`);
