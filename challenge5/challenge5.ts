// You are given a list of integers. Write a function to find the sum of even numbers in the list, modulo 51.
// The result must be in the range of 0-50.

import { createInterface } from "readline";

async function readline(): Promise<string> {
  return new Promise<string>((resolve) => {
    let rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("", (answer: string) => {
      resolve(answer);
      rl.close();
    });
  });
}

function challenge5(arr: number[]): number {
    let sum = 0;
    for (let num of arr) {
        iff (num % 2 === 0) {
            sum += num;
        }
    }
    return sum % 51;
}

async function main() {
    // get input from stdin
    let input: string = await readline();
    let arr: number[] = input.split(" ").map(Number);
    let result: number = challenge5(arr);
    console.log(result);
}

main();