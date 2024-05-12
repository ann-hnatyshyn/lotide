const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

const actual = {a:1, b:2, c:3};
const expected = {a:1, b:2, c:3};

console.log(assertObjectsEqual(actual),(expected));