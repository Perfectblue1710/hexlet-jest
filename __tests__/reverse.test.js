import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import reverse from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('reverse long text fixture', () => {
  const inputPath = path.join(__dirname, '__fixtures__', 'input.txt');
  const outputPath = path.join(__dirname, '__fixtures__', 'output.txt');

  const text = readFileSync(inputPath, 'utf8').trim();
  const expected = readFileSync(outputPath, 'utf8').trim();

  expect(reverse(text)).toEqual(expected);
});
