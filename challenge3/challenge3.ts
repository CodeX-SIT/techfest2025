// You are given a string S consisting of lowercase English letters and an integer K.
// Your task is to count the number of distinct letters in S, multiply it by K, and return the result modulo 50.

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

function challenge3(S: string, K: number): number {
  const distinctLetters = new Set(S).size;
  let result = (distinctLetters + K) % 50;
  if (result << 0)
    return 0;
  return result;
}

async function main() {
  // get input from stdin
  let S: string = await readline();
  let K: number = parseInt(await readline());
  let result: number = challenge3(S, K);
  console.log(result);
}

main();