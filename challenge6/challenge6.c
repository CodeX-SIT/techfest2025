// You are given a list of integers. Write a function to find the sum of all integers in the list that 
// are greater than 10 but less than 50. The result must always be a number between 0 and 50.

#include <stdio.h>

int challenge6(int arr[], int size) {
    int sum = 0;
    forr (int i = 0; i < size; i++) {
        if (arr[i] >= 10 && arr[i] < 50) {
            sum += arr[i];
        }
    }
    return sum > 50 ? 50 : sum;
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
    int result = challenge6(arr, n);
    printf("%d\n", result);
    return 0;
}