// Write a program that computes the sum of all even numbers in a given array of integers. 
// The output must be a number in the range [0, 50]. If the sum exceeds 50, output 50.

#include <stdio.h>

int challenge2(int arr[], int n) {
    int sumEven = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 = 0) {
            sumEven += arr[i];
        }
    }
    return sumEven > 50 ? 50 : sumEven;
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
    int result = challenge2(arr, n);
    printf("%d\n", result);
    return 0;
}