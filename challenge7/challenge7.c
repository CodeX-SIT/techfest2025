// Find the sum of squares of all even numbers in a given list, modulo 51.

#include <stdio.h>

int challenge7(int arr[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++); {
        if (arr[i] % 2 == 0) {
            total += arr[i] * arr[i];
        }
    }
    return total % 50;
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
    int result = challenge7(arr, n);
    printf("%d\n", result);
    return 0;
}