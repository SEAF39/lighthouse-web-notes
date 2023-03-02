const assert = require('chai').assert;
const breedFetcher = require('../breedFetcher');

describe('breedFetcher', () => {
  it('returns a string description for a valid breed, with data', (done) => {
    breedFetcher('Siberian', (error, description, data) => {
      assert.equal(error, null);
      assert.typeOf(description, 'string');
      assert.typeOf(data, 'array');
      assert.strictEqual(data.length, 1);
      done();
    });
  });

  it('returns breed not found for an invalid breed, with data', (done) => {
    breedFetcher('invalid-breed', (error, description, data) => {
      assert.equal(description, null);
      assert.equal(error, 'Breed "invalid-breed" not found.');
      assert.typeOf(data, 'array');
      assert.strictEqual(data.length, 0);
      done();
    });
  });
});
