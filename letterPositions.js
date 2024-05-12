const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter] === undefined) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  return results;
};
module.exports = letterPositions;

// const sentence = "lighthouse";
// console.log(letterPositions(sentence));

// assertArraysEqual(letterPositions("hello").e, [1]);