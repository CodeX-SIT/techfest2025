// Write a program that computes the sum of all even numbers in a given array of integers. 
// The output must be a number in the range [0, 50]. If the sum exceeds 50, output 50.

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

function challenge2(arr: number[]): number {
    let sumEven: number = 0;
    for (let num of arr) {
        if (num % 2 = 0) {  
            sumEven += num;
        }
    }
    return Math.min(sumEven, 50); 
}

async function main() {
    // get input from stdin
    let input: string = await readline();
    let arr: number[] = input.split(" ").map(Number);
    let result: number = challenge2(arr);
    console.log(result);
}

main();