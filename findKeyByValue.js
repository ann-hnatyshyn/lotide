const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed:", `${actual}`, "===", `${expected}`);
  } else {
    console.log("❌Assertion Failed:", `${actual}`, "!==", `${expected}`);
  }
}; assertEqual(3, 4);

const findKeyByValue = function(bestTVShowsByGenre) {
  const keys = (Object.keys(bestTVShowsByGenre));
  for (const item of keys) {
    if (bestTVShowsByGenre[keys] === item) {
      return keys;
    } else {
      return undefined;
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);