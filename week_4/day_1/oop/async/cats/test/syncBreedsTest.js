const assert = require("chai").assert;
const breedDetails = require("../syncBreeds");

describe('breedDetails', function() {
  it('returns breed details for the Bombay breed', function() {
    // Define the expected output
    const expectedOutput = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";

    // Call the function and store the result in actualOutput
    const actualOutput = breedDetails('Bombay');

    // Compare the expected output with the actual output
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('returns breed details for the Balinese breed', function() {
    // Define the expected output
    const expectedOutput = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";

    // Call the function and store the result in actualOutput
    const actualOutput = breedDetails('Balinese');

    // Compare the expected output with the actual output
    assert.strictEqual(actualOutput, expectedOutput);
  });

  it('returns undefined for an unknown breed', function() {
    // Call the function with an unknown breed and store the result in actualOutput
    const actualOutput = breedDetails('Unknown');

    // Check that the output is undefined.
    assert.strictEqual(actualOutput, undefined);
  });
});
