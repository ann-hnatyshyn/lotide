const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed:", `${actual}`, "===", `${expected}`);
  } else {
    console.log("❌Assertion Failed:", `${actual}`, "!==", `${expected}`);
  }
};


const string = "lighthouse labs rocks";

const countLetters = function() {
  const result = {};
  for (const letter of string) {
    if (letter !== "") {
      result[letter] = (result[letter] || 0) + 1;
    }
  }
  return result;
};

console.log(countLetters(string));