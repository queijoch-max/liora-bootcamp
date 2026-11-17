// app.js
const { substract } = require("./math");
console.log(substract(52, 41));

const math = require("mathjs");

const a = math.add(2, 3);
const b = math.sqrt(16);

console.log(`2 + 3 = ${a}`);
  console.log(`√16 = ${b}`);