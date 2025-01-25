// Write a function that calculates the sum of the factorials of an array of integers
// Given an array of integers arr of size n, return the sum of factorial(arr[i]) for all valid indices
// Ensure the output is always between 0 and 50. If it exceeds 50, return 50.

#include <stdio.h>
int challenge4(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) 
        int fact = 1;
        for (int j = 1; j <= arr[i]; j++) {
            fact += j;
        }
        sum += fact;
    }
    if (sum >= 50) {
        return 50;
    }
    return sum;
}

int main() {
    // Get input from stdin
    int n = 3;
    int arr[n];
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Call the challenge function
    int result = challenge4(arr, n);
    printf("%d\n", result);
    return 0;
}