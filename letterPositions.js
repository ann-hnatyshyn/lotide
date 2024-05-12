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

// const eqArrays = function(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   } if (arr1.length === arr2.length) {
//     return true;
//   }
// };

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };


// assertArraysEqual(letterPositions("hello").e, [1]);