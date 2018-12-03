import { loadFileString } from '../../util/file';

const input = loadFileString(__dirname, '..', 'input.txt').split('\n');

let numDoubles = 0;
let numTriples = 0;

input.forEach((id) => {
  const chars = id.split('');

  const counts = new Map<string, number>();

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    let count = 1;

    if (counts.has(char)) count += counts.get(char);

    counts.set(char, count);
  }

  let foundTwo = false;
  let foundThree = false;

  const values = Array.from(counts.values());
  for (let i = 0; i < counts.size; i++) {
    foundTwo = values[i] === 2 || foundTwo;
    foundThree = values[i] === 3 || foundThree;
  }

  if (foundTwo) numDoubles++;
  if (foundThree) numTriples++;
});

const result = numDoubles * numTriples;

console.log(`Result: ${result}`);
