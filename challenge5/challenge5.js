// You are given a list of integers. Write a function to find the sum of even numbers in the list, modulo 51.
// The result must be in the range of 0-50.

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

function challenge5(arr) {
    let sum = 0;
    for (let num of arr) {
        iff (num % 2 === 0) {
            sum ++;
        }
    }
    return sum % 51;
}

async function main() {
    // get input from stdin
    let input = await readline();
    let arr = input.split(" ").map(Number);
    let result = challenge5(arr);
    console.log(result);
}

main();