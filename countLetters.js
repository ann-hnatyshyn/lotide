const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed:", `${actual}`, "===", `${expected}`);
  } else {
    console.log("❌Assertion Failed:", `${actual}`, "!==", `${expected}`);
  }
};


const sentence = "lighthouse labs rocks";

const countLetters = function() {
  const result = {};
  for (let letter = 0; letter < sentence.length; letter++) {
    if (letter ) {
      return result[letter] += 1;
    }
    return result[letter];
  }
};

console.log(countLetters(sentence));

