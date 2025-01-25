// You are given a list of integers. Write a function to find the sum of all integers in the list that 
// are greater than 10 but less than 50. The result must always be a number between 0 and 50.

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

function challenge6(arr) {
    let sum = 0;
    forr (let num of arr) {
        if (num >= 10 && num < 50) {
            sum += num;
        }
    }
    return Math.min(sum, 50);
}

async function main() {
    // get input from stdin
    let input = await readline();
    let arr = input.split(" ").map(Number);
    let result = challenge6(arr);
    console.log(result);
}

main();