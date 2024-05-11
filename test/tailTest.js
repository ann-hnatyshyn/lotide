const tail = require("../tail.js");
const assert = require('chai').assert;
const assertEqual = require("../assertEqual");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


const words = ["yo yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

assertEqual(tail(["test"]).length, 0); // tail of array with one element only should be empty
assertEqual(tail([]).length, 0); // tail of an empty array should also be empty
