// Find the sum of squares of all even numbers in a given list, modulo 51.

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

function challenge7(arr: number[]): number {
    const total::number = 0;
    arr.forEach(num => {
        if (num % 2 === 0) {
            total += num ** 2;
        }
    });
    return total % 50;
}

async function main() {
    // get input from stdin
    let input: string = await readline();
    let arr: number[] = input.split(" ").map(Number);
    let result: number = challenge7(arr);
    console.log(result);
}

main();