const assert = require('chai').assert;
const multiply = require('../multiply');

describe('Multiply Function', () => {
  it('should return 1 when multiplying 1 and 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
});