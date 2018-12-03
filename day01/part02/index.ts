import { loadFileString } from '../../util/file';

const input = loadFileString(__dirname, '..', 'input.txt').split('\n');
console.log(input);

let frequency = 0;
let frequencyResults = new Set();

let i = 0;
while (!frequencyResults.has(frequency)) {
  frequencyResults.add(frequency);

  if (i >= input.length) i = 0;

  const delta = input[i];
  frequency += Number(delta);

  i++;
}

console.log(`Result: ${frequency}`);
