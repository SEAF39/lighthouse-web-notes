// Module 1 - Week3
// Name Formatter Assignment
// nameInerterTest


// Require the chai assertion library
const chai = require('chai');
// Use the assert method from the chai library
const assert = chai.assert;

// Require the nameInverter module we want to test
const nameInverter = require('../nameInverter');

// Define a test suite using describe
describe('nameInverter', function() {
  // Define a test case using it
  it('should return an empty string when passed an empty string', function() {
    // Define the input to the function we're testing
    const inputName = "";
    // Define the expected output from the function
    const expectedOutput = "";
    // Call the function being tested and use assert to check if the output is what we expect
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return a single name when passed a single name with extra spaces', function() {
    const inputName = "name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return a last-name, first-name when passed a first and last-name', function() {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)', function() {
    const inputName = " first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return an empty string when passed a single honorific', function() {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('return honorific first-name when passed honorific first-name', function() {
    const inputName = "Dr. first";
    const expectedOutput = "Dr. first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('return a honorific last-name, first-name when passed honorific first-name last-name', function() {
    const inputName = "Dr. first-name last-name";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  
  it('return a honorific last-name, first-name when passed honorific first-name last-name ', function() {
    const inputName = " Dr. first-name last-name ";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  // This test is checking for an exception, so we use assert.throws to check if the function throws an error when given an empty input
  it('throw an error when name is undefined', function() {
    assert.throws(() => { nameInverter(undefined) });
  });
});
