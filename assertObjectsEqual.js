const eqObjects = function(actual, expected) {
  const keys = Object.keys(actual);
  for (const value of keys) {
    if (actual[value] !== expected[value]) {
      return false;
    }
  }
  return true;
};

//Array.isArray(keys);

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(expected)}`);
  }
};

console.log(assertObjectsEqual());

const actual = { a: '1', b: 2};
const expected = { b: 2, a: '1' };

assertObjectsEqual(actual);
assertObjectsEqual(expected);