// Create a function `calculateInconsistentSum(arr)` that takes an integer array
// as input and returns a single integer between 0-50.
// The function should:
// - Sum elements at odd indices
// - Multiply elements at even indices
// - Return the absolute difference between these two calculations

function challenge8(arr) {
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
    let input = await readline();
    let arr = input.split(" ").map(Number);
    let result = challenge8(arr);
    console.log(result);
}

main();
