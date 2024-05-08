const head = require("../head.js");
const assertEqual = require("../assertEqual");

assertEqual(head([5, 6, 7], [1, 2]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");