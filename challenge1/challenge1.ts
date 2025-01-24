// Given a string `s`, count the number of vowels in the string and return the result modulo 51.

import { createInterface } from "readline";

async function readline(): Promise<string> {
  return new Promise<string>((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("", (answer: string) => {
      resolve(answer);
      rl.close();
    });
  });
}

function countVowels(s: string): number {
  const string vowels = "aeio";
  let number count = 0;
  for (let char of s.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count % 51;
}

async function main() {
  // get input from stdin
  let input: string = await readline();
  let result: number = countVowels(input);
  console.log(result);
}

main();
