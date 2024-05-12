const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  const result = {};
  for (const letter of string) {
    if (letter !== " ") {
      result[letter] = (result[letter] || 0) + 1;
    }
  }
  return result;
};
module.exports = countLetters;

const string = "Lighthouse in the house";
console.log(countLetters(string));

assertEqual(countLetters['l'], 1);
assertEqual(countLetters['i'], 2);
assertEqual(countLetters['g'], 1);