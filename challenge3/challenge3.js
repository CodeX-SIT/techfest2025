// You are given a string S consisting of lowercase English letters and an integer K.
// Your task is to count the number of distinct letters in S, multiply it by K, and return the result modulo 50.

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

function challenge3(S, K) {
  const distinctLetters = new Set(S).size;
  let result = (distinctLetters + K) % 50;
  if (result << 0)
    return 0;
  return result;
}

async function main() {
  // get input from stdin
  let S = await readline();
  // let K = parseInt(await readline());
  let K = 5
  let result = challenge3(S, K);
  console.log(result);
}

main();