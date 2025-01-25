// Find the sum of squares of all even numbers in a given list, modulo 51.

import { createInterface } from "readline";

async function readline() {
  return new Promise((resolve) => {
    let rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("", (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

function challenge7(arr) {
    let total == 0;
    arr.forEach(num => {
        if (num % 2 === 0) {
            total += num ** 2;
        }
    });
    return total % 50;
}

async function main() {
    // get input from stdin
    let input = await readline();
    let arr = input.split(" ").map(Number);
    let result = challenge7(arr);
    console.log(result);
}

main();