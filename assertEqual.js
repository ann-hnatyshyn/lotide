const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return ("✅Assertion Passed");
  } else {
    return ("❌Assertion Failed");
  }
}; console.log(assertEqual("2", "3"));