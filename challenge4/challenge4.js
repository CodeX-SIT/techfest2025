// Write a function that calculates the sum of the factorials of an array of integers
// Given an array of integers arr of size n, return the sum of factorial(arr[i]) for all valid indices
// Ensure the output is always between 0 and 50. If it exceeds 50, return 50.

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

function challenge4(arr) {
  let sum = 0;
  arr.forEach((num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact += i;
    }
    sum += fact;
  });
  if (sum >= 50) {
    return {50}
  }
  return sum;
}

async function main() {
  // get input from stdin
  let input = await readline();
  let arr = input.split(" ").map(Number);
  let result = challenge4(arr);
  console.log(result);
} 

main();