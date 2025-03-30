// Pair programming
// Ayebazibwe Ishmael
// Ayikoru Alima

import {assert} from 'chai'
import multiply from '../multiply.js';

describe('Multiply Function', () => {
  it('should return 1 when multiplying 1 and 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
});

describe('Multiply Function', () => {
  it('should return 4 when multiplying 2 and 2', () => {
    assert.equal(multiply(2, 2), 4);
  });
});

describe('Multiply Function', () => {
  it('should return 16 when multiplying 4 and 4', () => {
    assert.equal(multiply(4, 4), 16);
  });
});

describe('Multiply Function', () => {
  it('should return 1035 when multiplying 23 and 45', () => {
    assert.equal(multiply(23, 45), 1035);
  });
});
