const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed:", `${actual}`, "===", `${expected}`);
  } else {
    console.log("❌Assertion Failed:", `${actual}`, "!==", `${expected}`);
  }
};

const starObject = (
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  }
  //(x) => x.stars === 2
); //=> "noma"

//✅Implement the function findKey which takes in an object and a callback.
//✅It should scan the object
//and return the first key for which the callback returns a truthy value.
//If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  const key = Object.keys(object);
  const value = Object.values(object); //turned object into an array
  for (let i = 0; i < value.length; i++) {
    if (callback(value[i])) {
      return (key);
    }
  }
  }
  return undefined;
};

const returnFirstKey = (x) => {
  return (x === "stars: 3");
};

console.log(findKey(starObject, returnFirstKey));

assertEqual("noma");