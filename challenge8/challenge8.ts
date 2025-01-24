// Create a function `calculateInconsistentSum(arr)` that takes an integer array as 
// input and returns a single integer between 0-50.

function challenge8(arr: number[]): number {
    let oddSum = 0;
    let evenMult = 1;
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            evenMult *= arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    
    return Math.abs(oddSum - evenMult) % 51;
}

async function main() {
    // get input from stdin
    let input: string = await readline();
    let arr: number[] = input.split(" ").map(Number);
    let result: number = challenge8(arr);
    console.log(result);
}

main();