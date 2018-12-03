import { loadFileString } from '../../util/file';

const input = loadFileString(__dirname, '..', 'input.txt').split('\n');

class ID {
  private chars: string[];

  constructor(id: string) {
    this.chars = id.split('');
  }

  public length() {
    return this.chars.length;
  }

  public intersection(id: ID) {
    return this.chars.filter((char, i) => id.chars[i] === char);
  }
}

const ids = new Set<ID>();

input.forEach((id) => ids.add(new ID(id)));

let result = '';

ids.forEach((a) => {
  ids.forEach((b) => {
    const intersection = a.intersection(b);
    if (intersection.length === a.length() - 1) {
      result = intersection.join('');
    }
  });

  // We no longer need to include a because we already compared it to everything
  ids.delete(a);
});

console.log(`Result: ${result}`);
