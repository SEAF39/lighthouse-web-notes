function isPalindrome(phrase) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = phrase.replace(/[^0-9a-z]/gi, '').toLowerCase();
  // Reverse the cleaned string and compare with the original
  return cleaned === cleaned.split('').reverse().join('');
}


module.exports = isPalindrome;


