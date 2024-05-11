const eqObjects = function(actual, expected) {
  const keys = Object.keys(actual);
  for (const value of keys) {
    if (actual[value] !== expected[value]) {
      return false;
    }
  }
  return true;
};

const actual = {a:1, b:2, c:3};
const expected = {a:1, b:2, c:3};

//Array.isArray(keys);


const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(expected)}`);
  }
};

console.log(assertObjectsEqual(actual,expected));