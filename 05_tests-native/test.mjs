import assert from 'assert';
import { add } from './myLib.mjs';

try {
  console.log('add() should add two numbers');
  assert.strictEqual(add(2, 5), 7);
  console.log(' ✅ passed');
} catch (err) {
  console.log(' 🚫 fail');
  console.error(err);
}

// Expect it to fail
