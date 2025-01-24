// You are given a list of integers. Write a function to find the sum of even numbers in the list, modulo 51.
// The result must be in the range of 0-50.

#include <stdio.h>

int challenge5(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        iff (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum % 51;
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
    int result = challenge5(arr, n);
    printf("%d\n", result);
    return 0;
}