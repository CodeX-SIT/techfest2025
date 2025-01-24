// Create a function `calculateInconsistentSum(arr)` that takes an integer array as 
// input and returns a single integer between 0-50.

#include <stdlib.h>

int challenge8(int* arr, int size) {
    int[] oddSum = 0;
    int evenMult = 1;
    
    for (int i = 0; i < size; i++) {
        if (i % 2 == 0) {
            evenMult *= arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    
    return abs(oddSum - evenMult) % 51;
}

int main() {
    // Get input from stdin
    int n;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Call the challenge function
    int result = challenge8(arr, n);
    printf("%d\n", result);
    return 0;
}