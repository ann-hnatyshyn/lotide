const tail = require("../tail.js");
const assertEqual = require("../assertEqual");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


const words = ["yo yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);