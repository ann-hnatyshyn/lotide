const eqObjects = function(actual, expected) {
  const keys = Object.keys(actual);
  for (const value of keys) {
    Array.isArray(keys);
    if (actual[value] !== expected[value]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  console.log(`Example label: ${inspect(actual)}`);
};

console.log(assertObjectsEqual);

assertObjectsEqual({ a: '1', b: 2});
assertObjectsEqual({ b: 2, a: '1' });