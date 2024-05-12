const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const sentence = "lighthouse";
console.log(letterPositions(sentence));

assertArraysEqual(letterPositions("hello").e, [1]);