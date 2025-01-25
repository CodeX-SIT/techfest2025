// Given a string `s`, count the number of vowels in the string and return the result modulo 51.

import { createInterface } from "readline";

async function readline() {
  return new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("", (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

function countVowels(s) {
  const vowels = "aeio";
  let count = 0;
  for (let char of s.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count % 51;
}

async function main() {
  // get input from stdin
  let input = await readline();
  let result = countVowels(input);
  console.log(result);
}

main();
